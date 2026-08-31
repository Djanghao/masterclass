# Kotlin solution

**Author:** aradetariku
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-log-storage-system/solutions/1420286/](https://leetcode.com/problems/design-log-storage-system/solutions/1420286/)

---

```
class LogSystem() {
    
    val storage = TreeMap<String,Int>()

    fun put(id: Int, timestamp: String) {
        storage[timestamp] =id
    }

    fun retrieve(start: String, end: String, granularity: String): List<Int> {
     return   storage.subMap(start.updateDate(granularity, false),true, end.updateDate(granularity, true), true).map{
            it.value
        }
    }
    
    fun String.updateDate( granularity: String, isEnd:Boolean):String{
       return  when(granularity){
        "Year"->replaceRange(5,length, if(isEnd) "12:31:23:59:59" else "01:01:00:00:00")
        "Month"->replaceRange(8,length, if(isEnd) "31:23:59:59" else "01:00:00:00")
        "Day"->replaceRange(11,length, if(isEnd) "23:59:59" else "00:00:00")
        "Hour"->replaceRange(14,length, if(isEnd) "59:59" else "00:00")
        "Minute"->replaceRange(17,length, if(isEnd) "59" else "00")
        else->this
            
        }
    }

}