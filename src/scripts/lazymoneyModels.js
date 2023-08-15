import CONSTANTS from "./constants.js";
import { debug, info, isEmptyObject, is_lazy_number, is_real_number, log, warn } from "./lib/lib.js";

export class DND5eCurrency {
  label = "";
  abbreviation = "";
  conversion = 0;
}

export class LazyMoneyCurrency {
  value = 0;
  up = "";
  down = "";
}

export class LazyMoneyCP {
  pp = 0;
  gp = 0;
  ep = 0;
  sp = 0;
  cp = 0;
}
