# MySQL group by & left join (no cte, no lag, no window)

**Author:** catlovehorse
**Votes:** 9
**Link:** [https://leetcode.com/problems/the-number-of-passengers-in-each-bus-i/solutions/1792853/](https://leetcode.com/problems/the-number-of-passengers-in-each-bus-i/solutions/1792853/)

---

```
select bus_id, count(used_bus.m) as passengers_cnt
from 
buses left join 
		(select passenger_id, min(b.arrival_time) as m
			from passengers p join buses b 
			on p.arrival_time <= b.arrival_time
			group by passenger_id) as used_bus 
on (used_bus.m = buses.arrival_time)
group by bus_id
order by bus_id
```

The inner select choose the bus's arrival time that has the smallest postive difference with the passenger's arrival time. The outer select match the minimal bus arrival time to the bus id since no two buses will arrive at the same time and for buses that nobody catches on, `count(used_bus.m)` will automatically return 0.