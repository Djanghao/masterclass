# Swift using DateFormatter

**Author:** jphilli3
**Votes:** 1
**Link:** [https://leetcode.com/problems/reformat-date/solutions/2252593/](https://leetcode.com/problems/reformat-date/solutions/2252593/)

---

```
	let stringToDateFormatter: DateFormatter = { dateFormatter in
        dateFormatter.dateFormat = "d-MMM-yyyy"
        return dateFormatter                            
    }(DateFormatter())
    
    let dateToStringFormatter: DateFormatter = { dateFormatter in
        dateFormatter.dateFormat = "yyyy-MM-dd"
        return dateFormatter                            
    }(DateFormatter())
    
    func reformatDate(_ date: String) -> String {
        
        let components = date.split(separator: " ")
        let day = components[0]
        let month = components[1]
        let year = components[2]
        
        let dateComponents = String(day.dropLast(2) + "-" + month + "-" + year)
        
        guard let formattedDate = stringToDateFormatter.date(from: dateComponents) else { return "" }
       
        return dateToStringFormatter.string(from: formattedDate)
    }
```