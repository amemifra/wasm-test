(module
 (type $iii (func (param i32 i32) (result i32)))
 (type $v (func))
 (global $HEAP_BASE i32 (i32.const 8))
 (table 1 1 anyfunc)
 (elem (i32.const 0) $null)
 (memory $0 0)
 (export "memory" (memory $0))
 (export "add" (func $assembly/index/add))
 (func $assembly/index/add (; 0 ;) (type $iii) (param $0 i32) (param $1 i32) (result i32)
  ;;@ assembly/index.ts:4:13
  (i32.add
   ;;@ assembly/index.ts:4:9
   (get_local $0)
   ;;@ assembly/index.ts:4:13
   (get_local $1)
  )
 )
 (func $null (; 1 ;) (type $v)
 )
)
