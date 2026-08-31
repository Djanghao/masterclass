# Golang solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/car-fleet-ii/solutions/1536336/](https://leetcode.com/problems/car-fleet-ii/solutions/1536336/)

---

```go
func getCollisionTimes(cars [][]int) []float64 {
	collision := make([]float64, len(cars))
	collision[len(collision)-1] = -1.0
	// speed, keep, position
	skp := []*magic{{
		speed:    cars[len(cars)-1][1],
		position: float64(cars[len(cars)-1][0]),
		keep:     0,
	}}
loop:
	for i := len(cars) - 2; i >= 0; i-- {
		if cars[i][1] <= skp[0].speed {
			collision[i] = -1.0
			skp = []*magic{{
				speed:    cars[i][1],
				position: float64(cars[i][0]),
				keep:     0,
			}}
			continue
		}
		position := float64(cars[i][0])
		timeCost := 0.0
		for index := len(skp) - 1; index > 0; index-- {
			position += float64(cars[i][1])*skp[index].keep
			timeCost += skp[index].keep
			if position == skp[index-1].position {
				collision[i] = timeCost
				skp = skp[:index+1]
				skp[index].position = float64(cars[i][0])
				skp[index].speed = cars[i][1]
				skp[index].keep = collision[i]
				continue loop
			}
			if position > skp[index-1].position {
				prevKeep := (position - skp[index-1].position) / (float64(cars[i][1]) - float64(skp[index].speed))
				collision[i] = timeCost - prevKeep
				if index == len(skp)-1 {
					skp = append(skp, nil)
				} else {
					skp = skp[:index+2]
				}
				skp[len(skp)-2].position = float64(cars[i][0]) + float64(cars[i][1])*collision[i]
				skp[len(skp)-2].keep = prevKeep
				skp[len(skp)-1] = &magic{
					speed:    cars[i][1],
					position: float64(cars[i][0]),
					keep:     collision[i],
				}
				continue loop
			}
		}
		collision[i] = (skp[0].position - position) / (float64(cars[i][1]) - float64(skp[0].speed)) + timeCost
		reachPosition := collision[i]*float64(cars[i][1]) + float64(cars[i][0])
		skp = []*magic{
			{
				speed:    skp[0].speed,
				position: reachPosition,
				keep:     0,
			},
			{
				speed:    cars[i][1],
				position: float64(cars[i][0]),
				keep:     collision[i],
			},
		}
	}
	return collision
}

type magic struct {
	speed    int
	position float64
	keep     float64
}
```