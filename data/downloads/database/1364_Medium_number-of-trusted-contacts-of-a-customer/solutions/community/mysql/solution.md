# MYSQL : LEFT JOIN + GROUP BY + COUNT(DISTINCT). Good Luck 👍✨

**Author:** ashlyjoseph
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-trusted-contacts-of-a-customer/solutions/2422640/](https://leetcode.com/problems/number-of-trusted-contacts-of-a-customer/solutions/2422640/)

---

```
# Write your MySQL query statement below
/**
Three Tables: Customers/Contacts/Invoices

customer_id is the primary key for Customers table.
Customers table contains the name and the email of a customer of an online shop.

(user_id, contact_email) is the primary key for Contacts table.
Contacts table contains the name and email of one contact of customer with user_id/
Contacts table contains information about people each customer trust. The contact may or may not exist in the Customers table.

invoice_id is the primary key for Invoices table.
Invoices table indicates that user_id has an invoice with invoice_id and a price.

Write an SQL query to find the following for each invoice_id:

    customer_name: The name of the customer the invoice is related to.
    price: The price of the invoice.
    contacts_cnt: The number of contacts related to the customer.
    trusted_contacts_cnt: The number of contacts related to the customer and at the same time they are    customers to the shop. (i.e their email exists in the Customers table.)

*/

SELECT
    I.invoice_id,
    Cust.customer_name,
    I.price,
    COUNT(DISTINCT C.contact_name) AS contacts_cnt,
    COUNT(DISTINCT Nme.customer_name) AS trusted_contacts_cnt

FROM Invoices I
LEFT JOIN Customers Cust
    ON I.user_id = Cust.customer_id
LEFT JOIN Contacts C
    ON C.user_id = Cust.customer_id
LEFT JOIN Customers Nme
    ON Nme.customer_name = C.contact_name

GROUP BY 1, 2
```
