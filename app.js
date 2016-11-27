//MODULE
var app = angular.module('onlineStore',[]);
    
//CONTROLLER
app.controller('MenuController', function() {

  var products = [
    {
      name:'Trek Fuel EX8',
      image: 'http://goo.gl/ifcLtp',
      category: 'bikes',
      label:'Best Price',
      price:'899.99',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      comment: ''
    },
    {
      name:'Pedal V1 2016',
      image: 'http://goo.gl/uXouP4',
      category: 'components',
      label:'',
      price:'49.99',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      comment: ''
    },
    {
      name:'Handlebar Low Ride',
      image: 'http://goo.gl/8H0sbi',
      category: 'components',
      label:'New',
      price:'89.99',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      comment: ''
    },
    {
      name:'Enduro Helmet',
      image: 'http://goo.gl/gRleJT',
      category: 'clothing',
      label:'',
      price:'20.99',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      comment: ''
    }
  ];
        
  this.items = products;
  this.tab = 1;
  this.filtText = '';

  this.select = function(setTab) {
    this.tab = setTab;
    if (setTab === 2)
      this.filtText = "bikes";
    else if (setTab === 3)
      this.filtText = "components";
    else if (setTab === 4)
      this.filtText = "clothing";
    else
      this.filtText = "";
  }

  this.isSelected = function(checkTab) {
    return (this.tab === checkTab);
  }
        
});