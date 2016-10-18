$(document).ready(function() {
		
	var $leads = $('#leads');
    var $name = $('#name');
    var $email = $('#email');
    var $estado = $('#estado');
    var $nivel = $('#nivel');

		$.ajax({
		  type: 'GET',
		  url: 'http://localhost:3002/lead',
		  success: function(leads) {
		   	$.each(leads, function(i, lead) {
		  		 $leads.append('<li>Nome:'+lead.name+' | E-mail:'+lead.email+' | Estado:'+lead.estado+' | Nível:'+lead.nivel+'</li>');
		  	});
		  },
		  error: function() {
		  	alert('Erro ao carregar.')
		  }	
		});

		$('#add').on('click', function() {
			
			var lead = {
				name: $name.val(),
				email: $email.val(),
				estado: $estado.val(),
				nivel: $nivel.val(),
			};

			$.ajax({
				type: 'POST',
				url: 'http://localhost:3002/lead',
				data: lead,
				success: function(newLead){
					$leads.append('<li>Nome:'+newLead.name+' | E-mail:'+newLead.email+' | Estado:'+newLead.estado+' | Nível:'+newLead.nivel+'</li>');
				},
				error: function(){
					alert('Erro ao salvar');
				}
			});
		});
});