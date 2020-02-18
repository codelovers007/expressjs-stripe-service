const express = require('express');
const router = express.Router()
const stripe_controller = require('../controllers/stripe.controller');
// Account params
const account_params = {
  type: 'custom', country: 'US', email: 'bob@example.com',
  requested_capabilities: ['card_payments', 'transfers']
}

router.post('/create_account', stripe_controller.create_account);
router.post('/customers', stripe_controller.create_customer);
router.post('/bank_accounts/:customer_id', stripe_controller.create_customer_bank_account);

module.exports = router;