/*
(function (window) {
  'use strict';
  let App = window.App || {};
  let myTruck = new App.Truck('007', new App.DataStore());

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }
  Truck.prototype.createOrder = function (order) {
    console.log('Adding order for ' + order.emailAddress);
    this.db.add(order.emailAddress, order);
  }
  Truck.prototype.deliverOrder = function (customerId) {
    console.log('Delivering order for ' + customerId);
    this.db.remove(customerId);
  };
  Truck.prototype.printOrders = function () {

    let customerIdArray = Object.keys(this.db.getAll());

    console.log('Truck #', + this.truckId + ' has pending orders:');

    customerIdArray.forEach(function (id) {
      console.log(this.db.get(id));
    });
  };
  App.Truck = Truck;
  window.App = App;
})(window);

*/
//ФУНКЦИОНАЛЬНОСТЬ
// СОЗДАНИЕ И ВЫДАЧА ЗАКАЗОВ
// ПЕЧАТЬ СПИСКА ЗАКАЗОВ
(function(window){
  'use strict';
  let App = window.App||{};
  function Truck(truckId, db){
    this.truckId = truckId;
    this.db = db;
  }
  //ДОБАВЛЯЕМ ЗАКАЗЫ
  Truck.prototype.createOrder = function (order) {
    console.log('Adding order for ' + order.emailAddress);
    this.db.add(order.emailAddress, order);//СОХР ИНФУ О ЗАКАЗЕ с помощью метод add обьекта db
  };
  //---------<<<<
  //УДАЛЯЕМ ЗАКАЗЫ
  Truck.prototype.deliverOrder = function (customerId){//соответств заказу адр эл почты) {
    console.log('Delivering order for ' + customerId);
    this.db.remove(customerId);
  };
 //------------------<<<
  //ОТЛАДКА 
  //ПЕЧАТЬ 
  //ПОЛУЧАЕТ МАССИВ АДР ЭЛ ПОЧТ ПОЛЬЗВ, ВЫП ИТЕРАЦИЮ И ВЫВОД ИНФЫ ПОЛЬЗОВАТЕЛЕЙ
  Truck.prototype.printOrders = function (){
    let customerIdArray = Object.keys(this.db.getAll());
    console.log('Truck #' + this.truckId + ' has pending orders: ');
    customerIdArray.forEach(function(id){
      console.log(this.db.get(id));
    }.bind(this));
  };
  
App.Truck = Truck;
})(window);




























