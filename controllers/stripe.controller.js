const ConfigConstant = require('../config/config_constant');
var stripe = require('stripe');

exports.create_account = (req, res) => {
	let params = req.body
  stripe(ConfigConstant.stripeSecretKey).accounts.create(params, function(err, account) {
	  if (err==null) {
	  	res.send(account);
	  } else {
	  	res.status(400).send({error: err.raw.message});
	  }
	});
};

exports.create_customer = (req, res) => {
	let params = req.body
  stripe(ConfigConstant.stripeSecretKey).customers.create(params, function(err, customer) {
	  if (err==null) {
	  	res.send(customer);
	  } else {
	  	res.status(400).send({error: err.raw.message});
	  }
	});
};

exports.create_customer_bank_account = (req, res) => {
	let cus_id = req.params.customer_id
	let params = req.body
	stripe(ConfigConstant.stripeSecretKey).tokens.create(params, function(err, token) {
	  if (err==null) {
	  	let tokenParams = { source: token.id }
		  stripe(ConfigConstant.stripeSecretKey).customers.createSource(cus_id, tokenParams, function(err, bankAccount) {
			  if (err==null) {
			  	res.send(bankAccount);
			  } else {
			  	res.status(400).send({error: err.raw.message});
			  }
			});
	  } else {
	  	res.status(400).send({error: err.raw.message});
	  }
	}) 
};


