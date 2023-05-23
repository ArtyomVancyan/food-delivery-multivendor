import { StyleSheet } from 'react-native'
import { alignment } from '../../../utils/alignment'

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'row',
    ...alignment.MBsmall
  },
  leftContainer: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  rightContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default styles
