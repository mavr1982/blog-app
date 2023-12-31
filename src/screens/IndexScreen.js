import React, { useContext } from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Context } from "../context/BlogContext";

const IndexScreen = () => {

    const { state, addBlogPost, deleteBlogPost } = useContext(Context)
    return (
     <View>
        <Button
            title="Add blog"
            onPress={addBlogPost}
        />
        <FlatList
            data={state}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({ item }) => {
                return <View style={styles.row}>
                            <Text style={styles.title}>
                                {item.title} - {item.id}
                            </Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather name="trash" style={styles.icon} />    
                            </TouchableOpacity>
                        </View>
            }}
        />
     </View>
     );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;