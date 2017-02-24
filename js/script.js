    function Button(text, width, height, color, bcolor) {
        'use strict';
        this.text = text || 'Hello';
        this.width = width;
        this.height = height;
        this.color = color;
        this.bcolor = bcolor;
    }
    
    // za pomoca portotypu dodamy do klasy metode, ktora tworzy button
    
    //sposób 1
    Button.prototype = {
        create: function() {
        var self = this;
        this.$element= $('<button>');
        this.$element.text(this.text);
        this.$element.css({'width': this.width});
        this.$element.css({'height': this.height});
        this.$element.css({'color': this.color});
        this.$element.css({'background-color': this.bcolor});
        this.$element.click(function() {
            alert(self.text)
        });
        this.$element.appendTo($('body'));
        }
    }
    var btn1 = new Button('hello', 100, 50, 'red', 'green');
    
    btn1.create(); 
    
    
    // sposób 2 

/*
    Button.prototype.newButton = function(){
        'use strict';
        //console.log('tworzymy przycisk!');
        
        var self =this;
        
        this.$element = $('<button>');
    
        this.$element.text(this.text);
        
        this.$element.css({'width': this.width});
        
        this.$element.css({'height': this.height});
        
        this.$element.css({'color': this.color});
        
        this.$element.css({'background-color': this.bcolor});
        
        this.$element.click(function() {
            alert(self.text)
        });
        
        this.$element.appendTo($('body'));
        
        // lub
        //$('body').append(this.$element);
    }
    
    var btn1 = new Button('hello', 100, 50, 'red', 'green');
    
    btn1.newButton();
    
*/
