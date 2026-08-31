# [Golang] Straight forward solution

**Author:** Yushi_Lu
**Votes:** 1
**Link:** [https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/492918/](https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/492918/)

---

```

type Restaurant struct {
	id   int
	rate int
}

type Rests []Restaurant

func (Rst Rests) Len() int {
	return len(Rst)
}
func (Rst Rests) Less(i, j int) bool {
	if Rst[i].rate != Rst[j].rate {
		return Rst[i].rate > Rst[j].rate
	} else {
		return Rst[i].id > Rst[j].id
	}
}
func (Rst Rests) Swap(i, j int) {
	Rst[i], Rst[j] = Rst[j], Rst[i]
}
func filterRestaurants(restaurants [][]int, veganFriendly int, maxPrice int, maxDistance int) []int {
	var rs []Restaurant
	for _, v := range restaurants {
		if veganFriendly == 1 {
			if v[2] == 1 && v[3] <= maxPrice && v[4] <= maxDistance {
				var tmp Restaurant = Restaurant{v[0], v[1]}
				rs = append(rs, tmp)
			}
		} else {
			if v[3] <= maxPrice && v[4] <= maxDistance {
				var tmp Restaurant = Restaurant{v[0], v[1]}
				rs = append(rs, tmp)
			}
		}
	}
	sort.Sort(Rests(rs))
	var res []int = make([]int, len(rs))
	for i, v := range rs {
		res[i] = v.id
	}
	return res
}
```