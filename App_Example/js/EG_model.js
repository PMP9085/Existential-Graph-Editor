function EG_Model() {
    this.model = null;
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
            // Now we can add the term.
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

    getString: function ()
    {
       // return this.modelstring;
       if(this.model != null)
         return this.model.toString();
        else 
        return "";
    },

	check_expression: function (thing_to_check) {
		
		//Error cases 1-7 as returned by the validator function
        thing_to_check = fixSyntax(thing_to_check);
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

    //Model informs the controller of its current layout.
    Rebuild: function(object)
    {
        if(!object)
        {
            model.addAssertion("Submit Failed");
        }
        else
        {
            // Check if terms has more than just the the assertion value, if it does, then something is nested inside of it.
            if(object.terms.length > 1 || object.terms[0] instanceof egAssertion)
            {
                for(i = 0; i < object.terms.length; i++)
                {
                    this.Rebuild(object.returnTerm(i));
                }
            }
            // If there is just the one, figure out what it is and tell controller.
            else
            {
                // See if it is negative
                if(object.isNegated == true)
                {
                // Notify controller that the assertion exists.
                // Get the existential graph (eg) id in return. 
                egId = model.addNegatedAssertion(object.returnTerm(0));
                }
                // Not negative
                else
                {
                    // Notify controller that the assertion exists.
                    // Get the existential graph (eg) id in return. 
                egId = model.addAssertion(object.returnTerm(0));
                }
                // Stamp an ID on the object.
                object.id = egId;
            }
        }

    },
    // Returns the model to its original null state.
    EGclear: function()
    {
        this.model = null;
        this.modelstring = "";
    },
        
};

