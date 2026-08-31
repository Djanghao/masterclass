# Simple MSSQL - Good for Interviews - Faster then 100

**Author:** butlerc9
**Votes:** 4
**Link:** [https://leetcode.com/problems/arrange-table-by-gender/solutions/2158604/](https://leetcode.com/problems/arrange-table-by-gender/solutions/2158604/)

---

/*

### TABLES
GENDERS - User_id is PK, each row contains gender of a user. Equal numbers of each gender. Gender can be male, female or other.

### OUTPUT
    user_id
    gender

### QUESTION
Output user_id and gender but alternate between 'female', 'other', 'male'

### NOTES
Rank each of the user_ids within a gender
We will then create an overall table rank from the within gender ranks by
1. Multiplying each gender rank by 3
2. Adding an offset for each gender using a case statment
    - offset for female = 0
    - offset for other = 1
    - offset for male = 2

### METHOD
1. FROM genders table
2. RANK() within gender ORDER BY user_id, this will give the within gender rank
3. Multiply rank by 3
4. Add case statement with offset
5. Orderby new rank

### ASSUMPTION
- This wont work for more than 3 genders as the number 3 will be hard coded
- No duplicated values
- No null values

*/

	SELECT
		user_id,
		gender
	FROM
		genders
	ORDER BY
		(RANK() OVER(PARTITION BY gender ORDER BY user_id ASC) * 3) +
		CASE
			WHEN gender = 'female' THEN 0
			WHEN gender = 'other' THEN 1
			WHEN gender = 'male' THEN 2
		END ASC







