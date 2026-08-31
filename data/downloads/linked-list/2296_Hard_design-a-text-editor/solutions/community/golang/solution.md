# fast go solution

**Author:** jian_lee
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-a-text-editor/solutions/2139887/](https://leetcode.com/problems/design-a-text-editor/solutions/2139887/)

---

```
type TextEditor struct {
    curs, back []byte
}


func Constructor() TextEditor {
    return TextEditor{
        curs: make([]byte, 0),
        back: make([]byte, 0),
    }
}


func (this *TextEditor) AddText(text string)  {
    for _, c := range text {
        this.curs = append(this.curs, byte(c))
    }
}


func (this *TextEditor) DeleteText(k int) int {
    cnt := 0
    for ;len(this.curs) > 0 && cnt < k;cnt++ {
        this.curs = this.curs[0:len(this.curs) - 1]
    }
    return cnt
}


func (this *TextEditor) CursorLeft(k int) string {
    cnt := 0
    for ;cnt < k && len(this.curs) > 0;cnt++ {
        this.back = append(this.back, this.curs[len(this.curs) - 1])
        this.curs = this.curs[0:len(this.curs) - 1]
    }
        
    return this.rString(k)  
}

func (this *TextEditor) rString(k int) string {
    r := []byte{}
    for i, j := 0, len(this.curs) - 1; i < 10 && j >= 0; i++ {
        r = append(r, byte(this.curs[j]))
        j--
    }
    
    i, j := 0, len(r) - 1
    for i < j {
        r[i], r[j] = r[j], r[i]
        i++
        j--
    }
    
    return string(r)
}

func (this *TextEditor) CursorRight(k int) string {
    for i := 0; len(this.back) > 0 && i < k; i++ {
        l := len(this.back)
        this.curs = append(this.curs, this.back[l - 1])
        this.back = this.back[0:l-1]
    }
    return this.rString(k)
}
