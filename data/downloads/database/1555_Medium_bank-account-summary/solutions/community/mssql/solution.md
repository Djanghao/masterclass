# Simple solution ( Beast 98% ): clear step by step with note 🐦‍🔥🐦‍🔥🐦‍🔥

**Author:** cooking_Guy_9ice
**Votes:** 1
**Link:** [https://leetcode.com/problems/bank-account-summary/solutions/5349707/](https://leetcode.com/problems/bank-account-summary/solutions/5349707/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-- Write your PostgreSQL query statement below


WITH sumtotalAmountTran AS(
    -- to make the problem simple => just sum(amount) by sender and recipient
    SELECT
        paid_by,paid_to, SUM(amount) amount
    FROM
        Transactions
    GROUP BY 
        paid_by,paid_to
),
-- Calculate the total amount a person has sent
sender_tbl AS(SELECT paid_by user_id, SUM(amount) amount FROM sumtotalAmountTran GROUP BY paid_by
),
-- Calculate the total amount of money a person has received
recipient_tbl AS(SELECT paid_to user_id, SUM(amount) amount FROM sumtotalAmountTran GROUP BY paid_to
),
cal_amount AS(
	SELECT
		U.user_id,
        -- add amount with recipient 
        -- subtract amount with sender
		COALESCE(U.credit,0) + COALESCE(G.amount,0) - COALESCE(P.amount,0) amount
	FROM 
		Users U
	LEFT JOIN
		recipient_tbl G ON U.user_id = G.user_id
	LEFT JOIN
		sender_tbl P ON U.user_id = P.user_id
)
SELECT
	U.user_id,
	U.user_name,
	P.amount credit,
	CASE WHEN P.amount <= 0 THEN 'Yes' ELSE 'No' END credit_limit_breached 
FROM
	Users U
LEFT JOIN
	cal_amount P ON P.user_id = U.user_id
```