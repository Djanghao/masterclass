# ✅Very Simple Go Solution✅

**Author:** shukhratutaboev
**Votes:** 2
**Link:** [https://leetcode.com/problems/convert-the-temperature/solutions/3399809/](https://leetcode.com/problems/convert-the-temperature/solutions/3399809/)

---


```
func convertTemperature(celsius float64) []float64 {
	k := celsius + 273.15
	f := celsius * 1.8 + 32
	return []float64{k, f}
}
```