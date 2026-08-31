# TSQL Beats 97%

**Author:** DE_Sam
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-trusted-contacts-of-a-customer/solutions/5825625/](https://leetcode.com/problems/number-of-trusted-contacts-of-a-customer/solutions/5825625/)

---



# Code
```mssql []
/* Write your T-SQL query statement below */

SELECT invoice.invoice_id
       ,customer.customer_name
       ,invoice.price
       ,coalesce(cont.total_contacts, 0) contacts_cnt
       ,coalesce(trusted_contacts.total_trusted_contacts, 0) trusted_contacts_cnt
FROM invoices invoice
JOIN customers customer
  on customer.customer_id = invoice.user_id
left join 
(
    SELECT user_id, count(*) as total_contacts
      FROM contacts 
     group by user_id 
) cont
on customer.customer_id = cont.user_id
left join 
(
    SELECT user_id, count(*) as total_trusted_contacts
      FROM contacts cont
      WHERE exists (SELECT 1 
                      FROM customers cust
                      where cust.email = cont.contact_email)
     group by user_id 
) trusted_contacts
on customer.customer_id = trusted_contacts.user_id
order by invoice.invoice_id 
```