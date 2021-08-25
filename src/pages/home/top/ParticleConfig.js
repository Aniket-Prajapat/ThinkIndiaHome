const ParticleConfig={

	    "particles": {
	        "number": {
	            "value": 100
	        },
	        "size": {
	            "value": 3
	        },
			"color": {
				"value": 'white'
			  },
			  "line_linked": {
				"color": '#f44242',
				"opacity": 1
			  }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse",
					"density_auto": true,
					"density_area": 400 ,
	            },
				"onclick": {
					"enable": true,
					"mode": "push"
				  },
				  "onresize": {
					"enable": true,
					"density_auto": true,
					"density_area": 10 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
				  },
	        }
	    },
		"onclick": {
        "enable": true,
        "mode": "push"
      },
	  
      "resize": true
} ;
export default ParticleConfig;
