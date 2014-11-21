$(document).ready(function() { 
    $('.plant').click(function() {
        $(this).remove();
        $('#orange-tree-template').slideDown(1000);
        var tree = createTree();
        $('.grow').click(function() {
            tree.grow();
            $('.age').text(tree.age); 
            if (tree.age >= MAX_AGE) {
                $('.orange-tree').remove();
                $('#orange-tree-template').append('<h2>The tree is dead.</h2>');
            } else if (tree.age >= FRUIT_BEARING_AGE) {
                $('.fruit-count').text(tree.orangeCount);
                $('.display-tree-small').addClass('display-tree-big');
                $('.display-tree-big').children().remove();
                for(var i = 0; i < (tree.orangeCount); i++) {
                    var posx = (Math.random() * 750).toFixed();
                    var posy = (Math.random() * 450).toFixed();
                    var orangeSize = (Math.random() * 50).toFixed();
                    $('.display-tree-big').append('<img class="display-orange" src="images/orange.gif">');   
                    $('.display-orange:last-child')
                        .css({
                            'position':'absolute',
                            'left':posx+'px',
                            'top':posy+'px',
                            'margin': '80px 60px',
                            'width': orangeSize
                        });   
                };  
            };
        }); //end grow

        $('.pick').click(function() {
            pickOrange(tree);
            $('.fruit-count').text(tree.orangeCount);
            $('.display-orange:first-child').remove();
        }); // end pick

    }); //end click plant new tree
}); //end ready