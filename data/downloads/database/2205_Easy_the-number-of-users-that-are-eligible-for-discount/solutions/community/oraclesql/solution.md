# [MySQL + MS SQL + Oracle] Count(DISTINCT) + BETWEEN | Clean and Simple!

**Author:** domthedeveloper
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-users-that-are-eligible-for-discount/solutions/1926313/](https://leetcode.com/problems/the-number-of-users-that-are-eligible-for-discount/solutions/1926313/)

---

**MySQL**:
```
CREATE FUNCTION getUserIDs(startDate DATE, endDate DATE, minAmount INT) RETURNS INT
BEGIN
  RETURN (
      SELECT COUNT(DISTINCT user_id)
      FROM Purchases
      WHERE amount >= minAmount
      AND time_stamp BETWEEN startDate AND endDate
  );
END
```

**MS SQL Server**:
```
CREATE FUNCTION getUserIDs(@startDate DATE, @endDate DATE, @minAmount INT) RETURNS INT AS
BEGIN
    RETURN (
        SELECT COUNT(DISTINCT user_id)
        FROM Purchases
        WHERE amount >= @minAmount
        AND time_stamp BETWEEN @startDate AND @endDate
    );
END
```

**Oracle**:
```
CREATE FUNCTION getUserIDs(startDate IN DATE, endDate IN DATE, minAmount IN NUMBER) RETURN NUMBER IS
result NUMBER;
BEGIN
    SELECT COUNT(DISTINCT user_id) INTO result
    FROM Purchases
    WHERE amount >= minAmount
    AND time_stamp BETWEEN startDate AND endDate;
    RETURN result;
END;
```