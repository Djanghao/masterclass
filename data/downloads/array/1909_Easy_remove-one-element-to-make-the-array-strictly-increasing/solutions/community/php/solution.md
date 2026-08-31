# PHP solution faster than 100.00%

**Author:** ginayang_bibi
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/1670354/](https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/1670354/)

---

```
function canBeIncreasing($nums) {
	if(count($nums)==2){
		return true;
	}else{
		for($i=0;$i<count($nums);$i++){
			$arrs = $arr = $nums;
			array_splice($arr,$i,1);
			array_splice($arrs,$i,1);
			sort($arr);
			if(($arr==$arrs)&&($arr==array_unique($arr))){
				return true;
			}
		}
		return false;
	}
}
```