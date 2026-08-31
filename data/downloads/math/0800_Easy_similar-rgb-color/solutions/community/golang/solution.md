# golang beats 100%

**Author:** ajoyagrawal
**Votes:** 0
**Link:** [https://leetcode.com/problems/similar-rgb-color/solutions/2717074/](https://leetcode.com/problems/similar-rgb-color/solutions/2717074/)

---

```

func similarRGB(color string) string {

	return "#"+best(color[1:3])+best(color[3:5])+best(color[5:7])
}

func hextoint(c byte)byte{
	if (c>='0'&&c<='9'){
		return c -'0'
	}
	return c -'a'+10

}
func inttohex(i byte)byte{
	if (i>=0 && i<=9){
		return '0'+i
	}
	return 'a' + i - 10

}
func best(str string)string{
	val:=hextoint(str[0])*16+hextoint(str[1])
	diff:=256
	hex:=0
	var i int
	for i=0;i<16;i++{
		if  abs(i*16 + i - int(val)) <diff{
			diff = abs(i*16 + i- int(val)) 
			hex=i
		}
	}
	hexChar:= inttohex(byte(hex))
	return string(hexChar)+string(hexChar)
}

func abs(a int )int{
	if a> 0{
		return a
	}
	return -a
}
```