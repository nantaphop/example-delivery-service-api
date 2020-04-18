const createOrder = require('../../domains/orders/create-order')
module.exports = async function createOrderController(req, res, next) {
  try {
    const { body, user } = req
    const order = await createOrder(user, body)
    res.send(order)
  } catch (err) {
    next(err)
  }
}

/**
 * Request
 * curl --location --request POST 'http://localhost:3088/orders' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InR1ayIsImlhdCI6MTU4NzE4NzcxNSwiZXhwIjoxNTg3Mjc0MTE1fQ.Nh_4R5aKN3VWO8AjAiR6eLj-T2zzcl_opSm-lFMPkrU' \
--header 'Content-Type: application/json' \
--data-raw '{
	"createdBy": "fffff",
	"items": [
		{"item": "Chicken", "quantity": 3},
		{"item": "Pork", "quantity": 6}
	]
}'
 */

/**
  * Response
  * {
    "id": 9,
    "createdBy": "tuk",
    "updatedAt": "2020-04-18T05:45:13.636Z",
    "createdAt": "2020-04-18T05:45:13.636Z"
}
  */
