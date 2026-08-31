# [Kotlin] beat 100%

**Author:** timhuang1018
**Votes:** 0
**Link:** [https://leetcode.com/problems/ip-to-cidr/solutions/2207105/](https://leetcode.com/problems/ip-to-cidr/solutions/2207105/)

---

```
    //255.0.0.7 last ip address check start from first bit
    //if is 1 provide 1
    //if it's 0 -> move to next
    //check two conditionif it's enough vacancies
    //1.when bit reach 1
    //2.when vacancies pass 
    
    fun ipToCIDR(ip: String, n: Int): List<String> {
        val ips = ip.split(".").map{ it.toInt() }.toMutableList()
       return allocate(ips, n, mutableListOf())
    }
    
    
    fun allocate(ips: MutableList<Int>, remain: Int, result: MutableList<String>): MutableList<String>{

	if(remain <= 0) return result
	val currentValue = ips[3]

	if(currentValue and 1 != 0 || remain == 1){
		val block = ips.take(3).joinToString(".") + "." + currentValue + "/32"
		result.add(block)
		updateIP(ips, currentValue+1)
		allocate(ips, remain - 1, result)
		return result
	}

	var vacancies = 0
	var bitLoc = 1
	while(1 shl bitLoc <= remain){
		if(isZeroBit(ips, bitLoc)) break
		bitLoc++
	}     
	//deal the rest part at next recursion
	if(1 shl bitLoc > remain){
		bitLoc--
	}
	val block = ips.take(3).joinToString(".") + "." + currentValue + "/${32 - bitLoc}"
	result.add(block)
	updateIP(ips, currentValue + (1 shl (bitLoc)))
	return allocate(ips, remain - (1 shl (bitLoc)), result)
}

    //consider 256 overflow
    fun updateIP(ips: MutableList<Int>, updateValue: Int){
        if(updateValue / 256 != 0){
            ips[3] = updateValue % 256
            ips[2] += updateValue / 256
            if(ips[2] / 256 != 0){
                ips[1] += ips[2] / 256
                ips[2] = ips[2] % 256
            }
            
            if(ips[1] / 256 != 0){
                ips[0] += ips[1] / 256
                ips[1] = ips[1] % 256
            }
        }else{
            ips[3] = updateValue
        }
    }
    
    //consider 256 overflow
    fun isZeroBit(ips: MutableList<Int>, bitLoc: Int): Boolean{
        val ipPosition = 3 - (bitLoc / 8)
        val isZero = ips[ipPosition] and (1 shl (bitLoc % 8)) != 0
        return isZero
    }
```