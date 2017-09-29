import todo, {TODO_INITIAL} from './todo/actions'
import carrier, {CARRIER_INITIAL} from './carrier/actions'

export const INITIAL = {
    ...TODO_INITIAL,
    ...CARRIER_INITIAL,
}

export default {
    ...todo,
}
