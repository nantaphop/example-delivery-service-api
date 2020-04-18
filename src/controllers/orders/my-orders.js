const listOrderByOwner = require('../../domains/orders/list-order-by-owner')
module.exports = async function myOrder(req, res, next) {
  try {
    const { user } = req
    const order = await listOrderByOwner(user)
    res.send(order)
  } catch (err) {
    next(err)
  }
}

/**
 * Request
 * curl --location --request GET 'http://localhost:3088/orders' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InR1ayIsImlhdCI6MTU4NzE4OTE5OSwiZXhwIjoxNTg3Mjc1NTk5fQ.BR4nJnmnysAaD74PptRhP8mbTxii6d0ffJFVakhpU4o'
 */

/**
  * Response
  * [
    {
        "id": 1,
        "createdBy": "tuk",
        "createdAt": "2020-04-18T06:03:08.333Z",
        "updatedAt": "2020-04-18T06:03:08.333Z",
        "items": [
            {
                "id": 1,
                "item": "Chicken",
                "quantity": 3,
                "createdAt": "2020-04-18T06:03:08.344Z",
                "updatedAt": "2020-04-18T06:03:08.344Z",
                "orderId": 1
            },
            {
                "id": 2,
                "item": "Pork",
                "quantity": 6,
                "createdAt": "2020-04-18T06:03:08.344Z",
                "updatedAt": "2020-04-18T06:03:08.344Z",
                "orderId": 1
            }
        ]
    },
    {
        "id": 2,
        "createdBy": "tuk",
        "createdAt": "2020-04-18T06:03:25.142Z",
        "updatedAt": "2020-04-18T06:03:25.142Z",
        "items": [
            {
                "id": 3,
                "item": "Chicken",
                "quantity": 5,
                "createdAt": "2020-04-18T06:03:25.145Z",
                "updatedAt": "2020-04-18T06:03:25.145Z",
                "orderId": 2
            },
            {
                "id": 4,
                "item": "Pork",
                "quantity": 1,
                "createdAt": "2020-04-18T06:03:25.145Z",
                "updatedAt": "2020-04-18T06:03:25.145Z",
                "orderId": 2
            },
            {
                "id": 5,
                "item": "Beef",
                "quantity": 2,
                "createdAt": "2020-04-18T06:03:25.145Z",
                "updatedAt": "2020-04-18T06:03:25.145Z",
                "orderId": 2
            }
        ]
    }
]
  */
