# PHP Solution

**Author:** kkmehran
**Votes:** 0
**Link:** [https://leetcode.com/problems/watering-plants-ii/solutions/1628850/](https://leetcode.com/problems/watering-plants-ii/solutions/1628850/)

---

```
function minimumRefill($plants, $capacityA, $capacityB) {
	$N=count($plants);
	$i=0;   $j=$N-1;
	if($N==1){
		return 0;
	}
	$aliceCan=$capacityA;
	$bobCan=$capacityB;
	$totalFills=0;
	while($i<=$j){
	 if($i==$j){
		if($aliceCan>=$bobCan){
			if($aliceCan<$plants[$i]){
				$totalFills++;
			}
		}
		else{

			if($bobCan<$plants[$j]){
				$totalFills++;
			}
		 }

	 } else{

			 if($aliceCan<$plants[$i]){
				$aliceCan=$capacityA;
				$totalFills++;
			 }

			 $aliceCan-=$plants[$i];

			 if($bobCan<$plants[$j]){
				$bobCan=$capacityB;
				$totalFills++;
			 }
			 $bobCan-=$plants[$j];

	 }
	 $i++;
	 $j--;
	}
	return $totalFills;
  }
```