(function () {
    'use strict';

    var factory2 = new ShoppingListprovider();

    angular.module('ControllerAsApp', [])
        .controller('ShoppingListController1', ShoppingListController1)
        .controller('ShoppingListController2', ShoppingListController2)
        .factory('ShoppingListFactory', ShoppingListFactory);

    ShoppingListController1.$provider = ['ShoppingListFactory'];

    function ShoppingListController1(ShoppingListFactory) {
        var list1 = this;

        var shoppingList = ShoppingListFactory();

        list1.item = shoppingList.getItems();

        list1.removeItem = function (index) {
            shoppingList.removeItem(index);
        };
    }

    ShoppingListController2.$provider = ['ShoppingListFactory'];

    function ShoppingListController2(ShoppingListFactory) {
        var list2 = this;

        var shoppingList = ShoppingListFactory();

        list2.item = shoppingList.getBoughtItems();
    }


    function ShoppingListprovider() {
        var service = this;

        var items = [
            {
                mark: 'йогурт1',
                quantity: 3
            },
            {
                mark: 'йогурт2',
                quantity: 1
            },
            {
                mark: 'йогурт3',
                quantity: 4
            },
            {
                mark: 'йогурт4',
                quantity: 5
            },
            {
                mark: 'йогурт5',
                quantity: 7
            },
        ];
        var boughtItems = [];
        

        service.removeItem = function (itemIndex) {
            boughtItems.push(items);
            items.splice(itemIndex, 1);
        };

        service.getItems = function () {
            return items;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };
    }

    function ShoppingListFactory() {
        var factory = function () {
            return factory2;
        };
        return factory;
    }

})();