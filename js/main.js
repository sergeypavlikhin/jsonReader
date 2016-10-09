 $(document).ready(() => {
     String.prototype.makeUpperFirstLetter = function () {
         return this.charAt(0).toUpperCase() + this.slice(1);
     }

     $(document).on('click', '.clickme', () => {

         var json = getJsonData();
         var parsedJSON = JSON.parse(json);

         renderObject(parsedJSON);

         function getJsonData() {
             return '{ "id":"1","customer":"Ivan Ivanov","product":"IPhone 7s","timestamp": "1476004332"}';
         }

         function renderObject(obj) {

             for (prop in obj) {
                 let row = getRow();
                 let prop_name = getNameElement();
                 let prop_value = getValueElement();

                 $(prop_name).html(prop.makeUpperFirstLetter() + ":");
                 $(prop_value).html(obj[prop]);

                 $(row).append(prop_name).append(prop_value);
                 $('output').append(row);
             }

             function getRow() {
                 let row = document.createElement("div");
                 $(row).addClass('prop-row');
                 return row;
             }

             function getNameElement() {
                 let prop_name = document.createElement("span");
                 $(prop_name).addClass('prop-name');
                 return prop_name;
             }

             function getValueElement() {
                 let prop_value = document.createElement("span");
                 $(prop_value).addClass('prop-value');
                 return prop_value;
             }
         }
     });
 });