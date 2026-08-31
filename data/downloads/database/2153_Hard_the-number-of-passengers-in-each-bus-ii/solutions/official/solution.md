# Official Solution

**Link:** [https://leetcode.com/problems/the-number-of-passengers-in-each-bus-ii/solution/](https://leetcode.com/problems/the-number-of-passengers-in-each-bus-ii/solution/)

---

[TOC]

# Solution

---

## pandas

### Approach: Sequential Bus Boarding Simulation

Initially, we sort the `buses` DataFrame by the buses arrival times to ensure they are processed in chronological order. This sorting is crucial for accurately simulating the sequence in which buses arrive and pick up passengers. Two new columns, `passengers_cnt` and `leftover`, are introduced in the `buses` DataFrame. These columns are utilized to keep track of the number of passengers boarding each bus and any passengers who remain at the station after a bus departs, respectively.

The core of the solution lies in iterating through each bus in the sorted DataFrame. For the first bus, the algorithm counts all passengers who have arrived up to its arrival time. For subsequent buses, it counts the passengers who arrived after the previous bus and before the current bus's arrival time, adding any leftover passengers from the previous bus. The function then determines how many passengers board each bus, taking the bus's capacity into account. If the number of waiting passengers exceeds the bus's capacity, only a number equal to the capacity boards, and the rest are considered leftovers for subsequent buses.

Finally, the solution creates a result DataFrame that includes each bus's ID and the number of passengers it picked up, sorted by the bus ID.


#### Intuition

Let's review the intuition behind each step given the following input DataFrames:

Buses DataFrame (`buses`):

<table border="1">
  <tr>
    <th>bus_id</th>
    <th>arrival_time</th>
    <th>capacity</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>4</td>
    <td>10</td>
  </tr>
  <tr>
    <td>3</td>
    <td>7</td>
    <td>2</td>
  </tr>
</table>
<br>

Passengers DataFrame (`passengers`):

<table border="1">
  <tr>
    <th>passenger_id</th>
    <th>arrival_time</th>
  </tr>
  <tr>
    <td>11</td>
    <td>1</td>
  </tr>
  <tr>
    <td>12</td>
    <td>1</td>
  </tr>
  <tr>
    <td>13</td>
    <td>5</td>
  </tr>
  <tr>
    <td>14</td>
    <td>6</td>
  </tr>
  <tr>
    <td>15</td>
    <td>7</td>
  </tr>
</table>
<br>


1. **Sort Buses by Arrival Time**:
    ```python
    buses_sorted = buses.sort_values(by='arrival_time')
    ```
    This line sorts the `buses` DataFrame based on the `arrival_time` column in ascending order, so the buses are processed in the order they arrive at the station.

`buses_sorted`:
<table border="1">
  <tr>
    <th>bus_id</th>
    <th>arrival_time</th>
    <th>capacity</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>4</td>
    <td>10</td>
  </tr>
  <tr>
    <td>3</td>
    <td>7</td>
    <td>2</td>
  </tr>
</table>
<br>

2. **Iterate Over Each Bus**:
    ```python
    for i, bus in buses_sorted.iterrows():
    ```
    This loop iterates over each row in the `buses_sorted` DataFrame. Each row represents a bus, and `i` is the index of the row.

3. **Count Available Passengers for Each Bus**:
    - For the first bus:
        ```python
        if i == 0:
            available_passengers = passengers[passengers['arrival_time'] <= bus.arrival_time].shape[0]
        ```
        This counts all passengers who have arrived by the time the first bus arrives.
    - For subsequent buses:
        ```python
        else:
            arrived_after_previous_bus = passengers['arrival_time'] > buses_sorted.at[i - 1, 'arrival_time']
            arrived_before_current_bus = passengers['arrival_time'] <= bus.arrival_time
            available_passengers = passengers[arrived_after_previous_bus & arrived_before_current_bus].shape[0]
            available_passengers += buses_sorted.at[i - 1, 'leftover']
        ```
        This calculates the number of passengers who arrived after the previous bus and before the current bus, including passengers left over from the previous bus.
        - The column `leftover` will track passengers waiting for subsequent buses.


4. **Determine Passengers Boarding Each Bus**:
    ```python
    if available_passengers <= bus.capacity:
        buses_sorted.at[i, 'passengers_cnt'] = available_passengers
        buses_sorted.at[i, 'leftover'] = 0
    else:
        buses_sorted.at[i, 'passengers_cnt'] = bus.capacity
        buses_sorted.at[i, 'leftover'] = available_passengers - bus.capacity
    ```
    These lines determine how many passengers board the current bus. If the available passengers are fewer than or equal to the bus's capacity, all board the bus. If there are more passengers than the capacity, only as many as the bus can hold will board, and the rest are marked as `leftover`.

`buses_sorted`:
<table border="1">
  <tr>
    <th>bus_id</th>
    <th>arrival_time</th>
    <th>capacity</th>
    <th>passengers_cnt</th>
    <th>leftover</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>4</td>
    <td>10</td>
    <td>1</td>
    <td>0</td>
  </tr>
  <tr>
    <td>3</td>
    <td>7</td>
    <td>2</td>
    <td>2</td>
    <td>1</td>
  </tr>
</table>
<br>

5. **Return Result**:
    ```python
    return buses_sorted[['bus_id', 'passengers_cnt']].sort_values(by='bus_id')
    ```
    Finally, the function returns a DataFrame with the columns `bus_id` and `passengers_cnt`, sorted by `bus_id`. This DataFrame shows how many passengers boarded each bus.

<table border="1">
  <tr>
    <th>bus_id</th>
    <th>passengers_cnt</th>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>1</td>
  </tr>
  <tr>
    <td>3</td>
    <td>2</td>
  </tr>
</table>
<br>

#### Implementation

<iframe src="https://leetcode.com/playground/S5AQJw4o/shared" frameBorder="0" width="100%" height="500" name="S5AQJw4o"></iframe>

---

## Database

### Approach 1: Using Variables

The SQL approach for determining the number of passengers boarding each bus at a station is a sophisticated and efficient method, employing a Common Table Expression (CTE) and MySQL-specific variables. Initially, the solution begins with a CTE named `OrderedBusArrivals`, which creates a joint dataset of buses and passengers. This dataset is designed to include only those passengers who arrive on or before each bus's arrival time, effectively aligning passengers with the buses they are eligible to board. The CTE also groups the data by `bus_id` and counts the eligible passengers for each bus, ensuring the dataset is ordered by the buses' arrival times for sequential processing.

The crux of the solution lies in the use of MySQL variables for dynamic calculations during the query's execution. These variables track the cumulative number of passengers who have boarded previous buses and the number of passengers boarding the current bus. The query calculates, for each bus, the number of passengers that can board, constrained by the bus's capacity and the number of remaining passengers (after considering previous buses). This calculation is adeptly handled using the `LEAST` function, which ensures the number of passengers boarding does not exceed the bus's capacity. 

Finally, the solution presents the output in a structured format, listing each `bus_id` alongside the computed count of passengers (`passengers_cnt`) that boarded. The result is sorted by `bus_id`, offering an organized view of how passengers are distributed across the buses based on their arrival times and capacities. This approach is notable for its effective use of SQL features to simulate the real-world process of passengers boarding buses in a chronological and capacity-constrained manner.

#### Intuition

Let's break down the SQL query step by step and explain the intuition behind each part using the following input tables:

`Buses`:
| bus_id | arrival_time | capacity |
| ------ | ------------ | -------- |
| 1      | 2            | 1        |
| 2      | 4            | 10       |
| 3      | 7            | 2        |
<br>

`Passengers`:
| passenger_id | arrival_time |
| ------------ | ------------ |
| 11           | 1            |
| 12           | 1            |
| 13           | 5            |
| 14           | 6            |
| 15           | 7            |
<br>

1. **Common Table Expression (CTE) - `OrderedBusArrivals`**:
   This CTE joins the `Buses` and `Passengers` tables, counts the eligible passengers for each bus, and orders the buses by their arrival time.
    ```sql
    WITH OrderedBusArrivals AS (
      SELECT 
        bus_id, 
        b.arrival_time, 
        capacity, 
        COUNT(passenger_id) AS eligible_passengers 
      FROM 
        Buses b 
        LEFT JOIN Passengers p ON p.arrival_time <= b.arrival_time 
      WHERE 
        bus_id IS NOT NULL 
      GROUP BY 
        bus_id 
      ORDER BY 
        b.arrival_time
    )
    ```
    This CTE is key for pre-processing the data, setting the stage for the sequential processing of buses based on their arrival times and the count of passengers available to board each bus.

`OrderedBusArrivals`:
| bus_id | arrival_time | capacity | eligible_passengers |
| ------ | ------------ | -------- | ------------------- |
| 1      | 2            | 1        | 2                   |
| 2      | 4            | 10       | 2                   |
| 3      | 7            | 2        | 5                   |
<br>

2. **Using MySQL-specific Variables for Tracking Boarding and Accumulated Boarding**:
   This part of the query initializes variables and uses them to calculate the number of passengers boarding each bus, taking into account the bus's capacity and passengers who have boarded previous buses.
    ```sql
    SELECT 
      bus_id, 
      passengers_cnt 
    FROM 
      (
        SELECT 
          bus_id, 
          capacity, 
          eligible_passengers, 
          @boarded_passengers := LEAST(
            capacity, eligible_passengers - @accumulated_boarding
          ) AS passengers_cnt, 
          @accumulated_boarding := @accumulated_boarding + @boarded_passengers 
        FROM 
          OrderedBusArrivals, 
          (
            SELECT 
              @accumulated_boarding := 0, 
              @boarded_passengers := 0
          ) AS Initialization
      ) AS FinalResult 
    ORDER BY 
      bus_id;
    ```
    Here, the query uses the `LEAST` function to ensure that the number of passengers boarding a bus does not exceed the bus's capacity and accounts for the cumulative boarding up to that point. The variables `@accumulated_boarding` (the cumulative number of passengers who have boarded previous buses) and `@boarded_passengers` (the number of passengers boarding the current bus) are critical for maintaining the state across different rows of data.

| bus_id | passengers_cnt |
| ------ | -------------- |
| 1      | 1              |
| 2      | 1              |
| 3      | 2              |
<br>

3. **Final Result**:
   The final part of the query simply selects the desired output columns (`bus_id` and `passengers_cnt`) from the nested query and orders the result by `bus_id`.
    ```sql
    ORDER BY 
      bus_id;
    ```
    This line is a continuation of the outer query, ensuring that the final result is presented in an orderly fashion, sorted by the `bus_id`.

| bus_id | passengers_cnt |
| ------ | -------------- |
| 1      | 1              |
| 2      | 1              |
| 3      | 2              |
<br>


#### Implementation


```mysql []
WITH OrderedBusArrivals AS (
  -- Joining buses with passengers who arrived on or before each bus's arrival.
  -- Counting the number of passengers eligible to board each bus.
  SELECT 
    bus_id, 
    b.arrival_time, 
    capacity, 
    COUNT(passenger_id) AS eligible_passengers 
  FROM 
    Buses b 
    LEFT JOIN Passengers p ON p.arrival_time <= b.arrival_time 
  WHERE 
    bus_id IS NOT NULL 
  GROUP BY 
    bus_id 
  ORDER BY 
    b.arrival_time
) 
SELECT 
  bus_id, 
  passengers_cnt 
FROM 
  (
    SELECT 
      bus_id, 
      capacity, 
      eligible_passengers, 
      -- Calculating the number of passengers that can board the bus.
      -- Limited by either the bus's capacity or the remaining passengers after previous buses.
      @boarded_passengers := LEAST(
        capacity, eligible_passengers - @accumulated_boarding
      ) AS passengers_cnt, 
      -- Updating the total number of passengers who have boarded buses so far.
      @accumulated_boarding := @accumulated_boarding + @boarded_passengers 
    FROM 
      OrderedBusArrivals, 
      (
        SELECT 
          @accumulated_boarding := 0, 
          @boarded_passengers := 0
      ) AS Initialization
  ) AS FinalResult 
ORDER BY 
  bus_id;
```

### Approach 2: Using Recursion

This approach utilizes a combination of Common Table Expressions (CTEs), window functions, and recursive queries. The process starts with an `UpdatedBuses` CTE, which enhances the buses data by adding information about the arrival time of the previous bus for each entry. This step is crucial for understanding the interval during which new passengers arrive for each bus. 

Next, the `PassengerArrivalCounts` CTE builds upon this by counting new passengers arriving within the interval between the current and the previous bus. This count is critical for determining the potential pool of passengers available for each bus.

The core of the approach is the `BusBoardingDetails` recursive CTE. It calculates the actual number of passengers boarding each bus, considering both the bus's capacity and the passengers waiting due to the limitations of previous buses. The recursive nature of this CTE allows for the propagation of the "leftover" passengers (those who couldn't board previous buses) through the sequence of buses, ensuring an accurate count for each bus in the context of its arrival time and capacity.

Finally, the query selects from the `BusBoardingDetails` CTE, extracting the essential information about each bus's ID and the number of passengers it boarded, ordered by bus ID. 

#### Intuition

Let's break down the SQL query step by step and explain the intuition behind each part:

1. **UpdatedBuses CTE**:
   - This CTE adds a column to the `Buses` table to track the arrival time of the previous bus. It uses the `LAG` window function over the `arrival_time` ordered sequence to find the arrival time of the previous bus for each row. The `COALESCE` function is used to handle the first bus (where there is no previous bus), setting its previous bus's arrival time to 0.

    ```sql
    WITH RECURSIVE
    UpdatedBuses AS (
        SELECT
            B.bus_id,
            B.arrival_time,
            B.capacity,
            COALESCE(LAG(B.arrival_time) OVER (ORDER BY B.arrival_time), 0) AS previous_bus_arrival
        FROM Buses B
    ),
    ```

`UpdatedBuses`:
| bus_id | arrival_time | capacity | previous_bus_arrival |
| ------ | ------------ | -------- | -------------------- |
| 1      | 2            | 1        | 0                    |
| 2      | 4            | 10       | 2                    |
| 3      | 7            | 2        | 4                    |
<br>

2. **PassengerArrivalCounts CTE**:
   - This CTE joins the `UpdatedBuses` CTE with the `Passengers` table. 
   - `new_passengers` counts the number of new passengers (those who arrived after the previous bus and before the current bus) for each bus; telling us the number of passengers who are ready to board (without considering the capacity). 
   - The `ROW_NUMBER` window function is used to assign a sequential number (`bus_sequence_number`) to each bus based on its arrival time which is necessary since the `bus_id`'s arriving may not be sequential.
  
    ```sql
    PassengerArrivalCounts AS (
        SELECT
            B.bus_id,
            B.arrival_time,
            B.capacity,
            B.previous_bus_arrival,
            COUNT(P.passenger_id) AS new_passengers,
            ROW_NUMBER() OVER (ORDER BY B.arrival_time) AS bus_sequence_number
        FROM UpdatedBuses B
        LEFT JOIN Passengers P
            ON P.arrival_time <= B.arrival_time AND P.arrival_time > B.previous_bus_arrival
        GROUP BY B.bus_id, B.arrival_time, B.capacity
    ),
    ```

`PassengerArrivalCounts`:
| bus_id | arrival_time | capacity | previous_bus_arrival | new_passengers | bus_sequence_number |
| ------ | ------------ | -------- | -------------------- | -------------- | ------------------- |
| 1      | 2            | 1        | 0                    | 2              | 1                   |
| 2      | 4            | 10       | 2                    | 0              | 2                   |
| 3      | 7            | 2        | 4                    | 3              | 3                   |


3. **BusBoardingDetails Recursive CTE**:
   - This is a recursive CTE that calculates the number of passengers boarded and remaining for each bus.
   - The base case processes the first bus, calculating the passengers boarded (limited by the bus's capacity) and the passengers remaining (who couldn't board the bus).
   - The recursive case processes subsequent buses. It calculates the passengers boarded for each bus, considering both new passengers and remaining passengers from previous buses. It also updates the number of passengers remaining after each bus.

    ```sql
    BusBoardingDetails AS (
        SELECT
            bus_sequence_number,
            bus_id,
            LEAST(capacity, new_passengers) AS passengers_boarded,
            (new_passengers - LEAST(capacity, new_passengers)) AS passengers_remaining
        FROM PassengerArrivalCounts
        WHERE bus_sequence_number = 1

        UNION ALL

        SELECT
            PAC.bus_sequence_number,
            PAC.bus_id,
            LEAST(PAC.capacity, PAC.new_passengers + REC.passengers_remaining) AS passengers_boarded,
            (PAC.new_passengers + REC.passengers_remaining) - LEAST(PAC.capacity, PAC.new_passengers + REC.passengers_remaining) AS passengers_remaining
        FROM
            BusBoardingDetails REC,
            PassengerArrivalCounts PAC
        WHERE
            PAC.bus_sequence_number = REC.bus_sequence_number + 1
    )
    ```

4. **Final Selection**:
   - The final part of the query selects the `bus_id` and `passengers_boarded` from the `BusBoardingDetails` CTE, renaming `passengers_boarded` to `passengers_cnt`. The results are ordered by `bus_id`.

    ```sql
    SELECT
        bus_id,
        passengers_boarded AS passengers_cnt
    FROM BusBoardingDetails
    ORDER BY bus_id;
    ```

| bus_id | passengers_cnt |
| ------ | -------------- |
| 1      | 1              |
| 2      | 1              |
| 3      | 2              |
<br>

#### Implementation

```mysql []
WITH RECURSIVE

    -- Adding a column to track the arrival time of the previous bus
    UpdatedBuses AS (
        SELECT
            B.bus_id,
            B.arrival_time,
            B.capacity,
            -- Use LAG to find the arrival time of the previous bus
            COALESCE(LAG(B.arrival_time) OVER (ORDER BY B.arrival_time), 0) AS previous_bus_arrival
        FROM Buses B
    ),

    -- Counting new passengers arriving between the current and previous bus
    PassengerArrivalCounts AS (
        SELECT
            B.bus_id,
            B.arrival_time,
            B.capacity,
            B.previous_bus_arrival,
            -- Counting passengers arriving after the previous bus and before this bus
            COUNT(P.passenger_id) AS new_passengers,
            ROW_NUMBER() OVER (ORDER BY B.arrival_time) AS bus_sequence_number
        FROM UpdatedBuses B
        LEFT JOIN Passengers P
            ON P.arrival_time <= B.arrival_time AND P.arrival_time > B.previous_bus_arrival
        GROUP BY B.bus_id, B.arrival_time, B.capacity
    ),

    -- Recursive CTE to calculate passengers boarded and remaining for each bus
    BusBoardingDetails AS (
        -- Base case: Processing the first bus
        SELECT
            bus_sequence_number,
            bus_id,
            -- Boarding passengers limited by bus capacity
            LEAST(capacity, new_passengers) AS passengers_boarded,
            -- Remaining passengers who couldn't board the bus
            (new_passengers - LEAST(capacity, new_passengers)) AS passengers_remaining
        FROM PassengerArrivalCounts
        WHERE bus_sequence_number = 1

        UNION ALL

        -- Recursive case: Processing subsequent buses
        SELECT
            PAC.bus_sequence_number,
            PAC.bus_id,
            -- Boarding passengers, considering remaining passengers from previous buses
            LEAST(PAC.capacity, PAC.new_passengers + REC.passengers_remaining) AS passengers_boarded,
            -- Calculating remaining passengers
            (PAC.new_passengers + REC.passengers_remaining) - LEAST(PAC.capacity, PAC.new_passengers + REC.passengers_remaining) AS passengers_remaining
        FROM
            BusBoardingDetails REC,
            PassengerArrivalCounts PAC
        WHERE
            PAC.bus_sequence_number = REC.bus_sequence_number + 1
    )

-- Selecting the final bus boarding details
SELECT
    bus_id,
    passengers_boarded AS passengers_cnt
FROM BusBoardingDetails
ORDER BY bus_id;
```