# Javascript sliding window

**Author:** sindyxin
**Votes:** 3
**Link:** [https://leetcode.com/problems/diet-plan-performance/solutions/681368/](https://leetcode.com/problems/diet-plan-performance/solutions/681368/)

---

	var dietPlanPerformance = function(calories, k, lower, upper) {
		let left = 0, right = left + k, points = 0, countCal = 0;

		for(let i = 0; i < k; i++){
			countCal += calories[i]
		}
		while(right <= calories.length){

			if(countCal < lower){
				points--
			}else if(countCal > upper){
				points++
			}
			countCal = countCal - calories[left] + calories[right]
			left++
			right = left + k
		}
		return points
	};