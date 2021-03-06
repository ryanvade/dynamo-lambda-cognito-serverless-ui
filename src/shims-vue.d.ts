declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

// This is a very rough interface which says, this object must be functions only
// you could probably do better
interface AsyncComputedObject{
  [K : string]:()=>any;
}

// ComponentOptions is declared in types/options.d.ts
