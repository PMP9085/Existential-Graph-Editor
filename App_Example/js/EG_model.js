function EG_Model() {
    //this.model = null;
    this.controller = null;
};

// Member functions that are added to the Modelr object.
EG_Model.prototype = {
    // Sets a reference to the controller.
    setController: function (controller) {
        this.controller = controller;
    },

    // Adds a new negated assertion to the model. 
    addNegatedAssertion: function (assertionValue) {
            // Notify controller that a new assertion is being added.
            // Get the existential graph (eg) id in return. 
            var egId = controller.addNegatedAssertion(assertionValue);
            //Check to see if this is the first assertion in the model.
            if (this.model == null) {
            //Add an empty egAssertion to start loading terms into. This needs to be updated if everything is encapsulated in a negative.
                this.model = new egAssertion();
            }
            //Now we can add the term.
            this.model.addTerm(new egAssertion(assertionValue, true, egId));

    },
	addAssertion: function (assertionValue) {
            // Notify controller that a new assertion is being added.
            // Get the existential graph (eg) id in return. 
            var egId = controller.addAssertion(assertionValue);
            //Check to see if this is the first assertion in the model.
            if (this.model == null) {
            // Add an empty egAssertion to start loading terms into. This needs to be updated if everything is encapsulated in a negative.
                this.model = new egAssertion();
            }
            // Now we can add the term.
            this.model.addTerm(new egAssertion(assertionValue, false, egId));

    },

	check_expression: function (thing_to_check) {
		
		//Error cases 1-7 as returned by the validator function
		if (validate_input(thing_to_check) == "error1")
		{
			return "error1";
		}
		else if (validate_input(thing_to_check) == "error2")
		{
			return "error2";
		}
		else if (validate_input(thing_to_check) == "error3")
		{
			return "error3";
		}
		else if (validate_input(thing_to_check) == "error4")
		{
			return "error4";
		}
		else if (validate_input(thing_to_check) == "error5")
		{
			return "error5";
		}
		else if (validate_input(thing_to_check) == "error6")
		{
			return "error6";
		}
		else if (validate_input(thing_to_check) == "error7")
		{
			return "error7";
		}

		/////////////////////////////////////////////////////
		
		else if (validate_input(thing_to_check) == true)
		{
			return parse_Items(thing_to_check);
		}
		//else return false;
		
	},

    // Returns the model to its original null state.
    EGclear: function()
    {
        this.model = null;
    }
        
}

