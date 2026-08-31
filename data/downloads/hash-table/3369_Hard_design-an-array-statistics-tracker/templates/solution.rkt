(define statistics-tracker%
  (class object%
    (super-new)
    
    (init-field)
    
    ; add-number : exact-integer? -> void?
    (define/public (add-number number)
      )
    ; remove-first-added-number : -> void?
    (define/public (remove-first-added-number)
      )
    ; get-mean : -> exact-integer?
    (define/public (get-mean)
      )
    ; get-median : -> exact-integer?
    (define/public (get-median)
      )
    ; get-mode : -> exact-integer?
    (define/public (get-mode)
      )))

;; Your statistics-tracker% object will be instantiated and called as such:
;; (define obj (new statistics-tracker%))
;; (send obj add-number number)
;; (send obj remove-first-added-number)
;; (define param_3 (send obj get-mean))
;; (define param_4 (send obj get-median))
;; (define param_5 (send obj get-mode))