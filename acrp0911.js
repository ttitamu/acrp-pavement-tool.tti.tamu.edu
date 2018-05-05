$( document ).ready(function() {
  $.getJSON( "pavement-distresses.json", function( data ) {
	 var items = [];
	 var pavement_type = '';
	  $.each( data, function( pavetype_key, distresses_val ) {

	  		if ( pavetype_key == 'flexible_distress' ) { 
	  			pavement_type = 'Flexible Pavement'; 
	  		} else {
	  			pavement_type = 'Rigid Pavement';
	  		}
	  		items.push( '<div class="container">' );
	  		items.push('<h1>' + pavement_type + '  Distresses</h1>'); 
	  		
	  		$.each( distresses_val, function( i, distress_val ) {
	  			items.push( '<section class="distress">' );

	  			items.push( '<h3>' + distress_val.name + '</h3>' );
	  			items.push( '<p>' + distress_val.description + '</p>' );
	  			items.push( '<h4>Types:</h4>' );

	  			if ( $.isArray(distress_val.type) ) {
		  			$.each( distress_val.type, function( type_index, type_val ) {
		  				items.push( '<div class="type type');
		  				items.push( type_val.id + '">' );
		  				items.push( '<h5>' + type_val.name + '</h5>' );
		  				items.push( '<p>' + type_val.description + '</p>' );
		  				items.push( '<h6>Photos:</h6>');
		  				// photos here
		  				items.push( '</div><!-- end .type.type' + type_val.id + ' -->' );
		  			});
		  		}
		  		
	  			items.push('</section><!-- end .distress -->');

	  		});
	  		items.push('</div><!-- end .container -->');
	  });
	 
	  $( "<article/>", {
	    "class": "my-new-list",
	    html: items.join( "" )
	  }).appendTo( "body" );
	});
});