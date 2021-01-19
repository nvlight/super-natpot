//
(function($) {
    $(function() {

        calculate();

        jQuery('#calculator input').keyup(function() {
            this.value = this.value.replace(/[^0-9\.,]/g, '');
            this.value = this.value.replace(/[,]/, '.');
        });
        jQuery('#calculator input, #calculator select').change(function() {
            calculate();
        });
        jQuery('#calculator input').keyup(function() {
            calculate();
        });

        function calculate() {
            $('.calculator').each(function(key, val) {
                calcInputs = {};
                $(this).find('input, select').each(function(key, val) {
                    name = $(this).attr('name');
                    val = $(this).val();
                    if (!$.isNumeric(val)) {
                        switch (name) {
                            case 'area':
                                val = '';
                                break;
                            case 'lamp':
                                val = '';
                                break;
                            case 'tube':
                                val = '';
                                break;
                            case 'chandelier-hook':
                                val = '';
                                break;
                            default:
                                break;
                        }
                        $(this).val(val);
                    }
                    calcInputs[name] = val;
                });

                total = 0;

                switch (calcInputs.texture) {
                    case 'matoviy':
                        total += calcInputs.area * 349;
                        break;
                    case 'glyanec':
                        total += calcInputs.area * 349;
                        break;
                    case 'satin':
                        total += calcInputs.area * 349;
                        break;
                    case 'tkan':
                        total += calcInputs.area * 799;
                        break;
                    case 'factur':
                        total += calcInputs.area * 799;
                        break;
                    case 'fotopechat':
                        total += calcInputs.area * 799;
                        break;
                    case 'dvuhurovneviy':
                        total += calcInputs.area * 899;
                        break;
                    case 'zvezdnoe-nebo':
                        total += calcInputs.area * 8000;
                        break;
                    default:
                        break;
                }

                // каждый угол
                corners_count = 4;
                if (calcInputs.corners > corners_count) {
                    total += (calcInputs.corners - corners_count) * 100;
                }
                // установка люстры
                if (calcInputs['chandelier-hook'] >= 1) {
                    total += calcInputs['chandelier-hook'] * 300;
                }
                // установка встраемого светильника
                if (calcInputs.lamp >= 1) {
                    total += calcInputs.lamp * 300;
                }
                // обход трубы
                if (calcInputs.tube >= 1) {
                    total += calcInputs.tube * 300;
                }

                install = calcInputs.area * 0;
                total += install;

                total += ' руб';
                jQuery(this).find('span.total').html(total);
            });
        }

    });
})(jQuery);