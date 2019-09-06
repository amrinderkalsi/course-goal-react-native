import React from 'react';
import { StyleSheet, View, Button} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import GoalList from './components/GoalList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      enteredGoal: '',
      courseGoal: [],
      modalVisible: false
    }
  }

  goalInputHandler = (enteredText) => {
    this.setState({ enteredGoal: enteredText });
  };

  addGoalHandler = () => {
    console.log(this.state.enteredGoal);
    if(this.state.enteredGoal != ''){
      this.setState({ 
        courseGoal: [...this.state.courseGoal, { id: Math.random().toString(), value: this.state.enteredGoal }],
        enteredGoal: '',
        modalVisible: false
      });
    }
  };

  removeGoal = (id) => {
    const newCourseGoal = this.state.courseGoal.filter(goal => goal.id !== id);
    this.setState({courseGoal: newCourseGoal});
  };

  renderGoals = ({ item }) => {
    return (

      <GoalItem value={item.value} id={item.id} onPress={this.removeGoal}/>
    );
  }

  openModal = () => {
    this.setState({
      modalVisible: true
    })
  }

  closeModal = () => {
    this.setState({
      modalVisible: false
    })
  }

  render() {
    return (
      <View style={styles.screen}>
        <Button title='Add course goal' onPress={this.openModal} />
        <GoalInput
          placeholder="Course Goal"
          onChangeText={this.goalInputHandler}
          value={this.state.enteredGoal}
          title="Add"
          onPress={this.addGoalHandler}
          modalVisible={this.state.modalVisible}
          modalClose={this.closeModal}
        />

        <GoalList 
          data={this.state.courseGoal}
          renderItem={this.renderGoals}
          keyExtractor={(item, index) => item.id}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    padding: 40
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%',
    padding: 10
  },
  listItem: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc'
  }
});


export default App;