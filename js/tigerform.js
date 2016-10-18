(function ( $ ) {
	$.fn.tigerform = function(options) {

		var options = { 
			'token':'62bb61431348e22850828a5829c4373faafe29c1', 
			'secret':'51a266c2844ccd5cac83d88de88d82d05358aa51', 
			'fields': { 
				'estado':['PR','SC','SP','RS'], 
				'nivel':['Iniciante','Intermediário','Avançado','Ninja'] 
			}
		};

		//config default
		var defaults = {
          'cor' : '#2199e8'
        };
 
        var settings = $.extend( {}, defaults, options );

	  return this.each(function() {
  		$(this).css({color: settings.cor});
		$(this).html('<div class="row"><div class="medium-6 medium-centered large-4 large-centered columns"><form><div class="row column log-in-form"><h4 class="text-center">FrontEnd Ninja</h4><label>Nome<input id="name" type="text" placeholder="Digite o nome"></label><label>Email<input type="text" id="email" placeholder="somebody@example.com"></label><label>Estado<select name="estado" id="estado"><option value="'+options.fields.estado[0]+'">'+options.fields.estado[0]+'</option><option value="'+options.fields.estado[1]+'">'+options.fields.estado[1]+'</option><option value="'+options.fields.estado[2]+'">'+options.fields.estado[2]+'</option><option value="'+options.fields.estado[3]+'">'+options.fields.estado[3]+'</option></select></label><label>Nível<select name="nivel" id="nivel"><option value="'+options.fields.nivel[0]+'">'+options.fields.nivel[0]+'</option> <option value="'+options.fields.nivel[1]+'">'+options.fields.nivel[1]+'</option><option value="'+options.fields.nivel[2]+'">'+options.fields.nivel[2]+'</option><option value="'+options.fields.nivel[3]+'">'+options.fields.nivel[3]+'</option></select></label></div></form><p><a id="add" class="button expanded">Salvar</a></p></p></div></div>');

	  });

	};

})(jQuery);