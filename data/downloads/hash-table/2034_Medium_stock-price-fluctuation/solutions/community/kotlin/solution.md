# kotlin using two TreeMaps beats 90% / 90% O(1) for current O(log n) for others

**Author:** user4936
**Votes:** 0
**Link:** [https://leetcode.com/problems/stock-price-fluctuation/solutions/2292168/](https://leetcode.com/problems/stock-price-fluctuation/solutions/2292168/)

---

```

class StockPrice() {
    
    
    data class Price(val ts: Int, var price: Int)
    
    
    //ts -> price.
    val tmap = TreeMap<Int,Int>()
    //price-> frequency.
    val pmap = TreeMap<Int,Int>()
    
    var lastPrice : Int = -1
    var lastTs = -1
    fun update(timestamp: Int, price: Int) {
        if(timestamp >= lastTs) {
            lastPrice = price
            lastTs = timestamp
        }
        
        var isUpdate = false 
        if(tmap[timestamp] != null) {
            isUpdate = true
        }
        
        if(isUpdate) {
            val prevPrice = tmap[timestamp]!!
            pmap[prevPrice] = pmap[prevPrice]!! - 1
            if(pmap[prevPrice]!! == 0) {
                pmap.remove(prevPrice)
            }
        }
        
        tmap[timestamp] = price
        
        pmap[price] = (pmap[price] ?: 0 ) + 1 
        
    }

    fun current(): Int {
        return lastPrice
        
    }

    fun maximum(): Int {
        
        return pmap.lastEntry().key
        
    }

    fun minimum(): Int {
        
        return pmap.firstEntry().key
    }

}


 
 ```