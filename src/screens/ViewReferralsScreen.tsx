import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useApi from '../hooks/useApi';
import {DataItem} from '../interfaces/interfaces';
import TitleText from '../components/text/TitleText';

const ViewReferralsScreen = () => {
  const {data, loading, fetchData} = useApi();

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}: {item: DataItem}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemName}>
          <Text
            style={
              styles.itemNameText
            }>{`${item.firstName} ${item.lastName}`}</Text>
          <Text style={styles.itemEmailText}>{`${item.email}`}</Text>
        </View>
        <View style={styles.itemPhone}>
          <Text style={styles.itemPhoneText}>{item.mobile}</Text>
        </View>
        <View style={styles.itemActions}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.itemActionsText}>...</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.conatiner}>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <View style={styles.viewRecordsContainer}>
          <TitleText text="View records" />
          <View style={styles.tableHeadings}>
            <View style={styles.nameHeading}>
              <Text style={styles.headingText}>NAME</Text>
            </View>
            <View style={styles.phoneHeading}>
              <Text style={styles.headingText}>PHONE</Text>
            </View>
            <View style={styles.actionsHeading}>
              <Text style={styles.headingText}>ACTIONS</Text>
            </View>
          </View>
          <FlatList
            data={data}
            keyExtractor={item => item._id}
            renderItem={renderItem}
            style={styles.flatList}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  conatiner: {flex: 1, marginHorizontal: 10},
  viewRecordsContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
  },
  tableHeadings: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#E4E4E4',
    marginVertical: 10,
    borderTopColor: '#7A7D96',
    borderBottomColor: '#7A7D96',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderWidth: 1,
  },
  nameHeading: {flex: 2.5, paddingLeft: 10},
  phoneHeading: {flex: 2},
  actionsHeading: {flex: 1},
  headingText: {fontSize: 12, color: '#7A7D96'},
  flatList: {flex: 1, width: '100%'},
  itemContainer: {
    height: 50,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4',
    flexDirection: 'row',
  },
  itemName: {
    flex: 2.5,
    justifyContent: 'space-evenly',
  },
  itemNameText: {
    color: '#000',
  },
  itemEmailText: {color: '#7A7D96'},
  itemPhone: {flex: 2, justifyContent: 'center'},
  itemPhoneText: {color: '#7A7D96'},
  itemActions: {flex: 1, alignSelf: 'center'},
  itemActionsText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7A7D96',
    paddingBottom: 5,
  },
});

export default ViewReferralsScreen;
