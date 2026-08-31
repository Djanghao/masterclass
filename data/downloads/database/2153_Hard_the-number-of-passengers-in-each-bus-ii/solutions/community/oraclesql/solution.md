# oracle; non-recursive model solution, beats 100%

**Author:** k_leontev
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-number-of-passengers-in-each-bus-ii/solutions/2332480/](https://leetcode.com/problems/the-number-of-passengers-in-each-bus-ii/solutions/2332480/)

---

```
with station_traffic(arrival_time, bus_id, passenger_id, capacity) as (
    select arrival_time, bus_id, null, capacity from buses
    union all 
    select arrival_time, null, passenger_id, null from passengers
)
select 
    bus_id,
    passengers_in_bus passengers_cnt
from (    
    select 
        * 
    from station_traffic 
    model 
        dimension by (
            row_number() over(
                order by 
                    arrival_time, 
                    passenger_id nulls last, 
                    bus_id
            ) entry_id
        )
        measures (
            bus_id, 
            passenger_id, 
            capacity,
            0 passengers_on_station,
            0 passengers_in_bus
        ) 
        rules automatic order (
            passengers_in_bus[any] = decode(
                bus_id[cv()], -- is this entry a bus?
                null, null, -- no. no passengers
                least(nvl(passengers_on_station[cv()-1], 0), capacity[cv()])  -- pick as many as we can
            ),
            passengers_on_station[any] = decode(
                bus_id[cv()], -- is this entry a bus?
                null, nvl(passengers_on_station[cv()-1], 0) + 1,  -- no. increment passenger count 
                passengers_on_station[cv()-1] - passengers_in_bus[cv()]  -- yes, calculate the remaining count.
            )
        )
)    
where bus_id is not null
order by bus_id
```