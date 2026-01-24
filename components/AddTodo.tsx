import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const AddTodo = ({visible, onClose}: {visible: boolean, onClose: () => void}) => {
  return (
    <Modal
    visible={visible}
    animationType="slide"
    transparent={true}
    onRequestClose={onClose}
    >
        <View className="flex-1 items-center justify-center bg-black/20">
            <View className="w-11/12 rounded-2xl bg-white p-6">
                <Text className="text-2xl font-bold">Add Todo</Text>
                <Text className="mt-4 text-lg">Todo Title</Text>
                <TextInput
                className="mt-2 rounded-lg border border-gray-300 p-3"
                placeholder="Enter todo title"
                />
                <Text className="mt-4 text-lg">Todo Description</Text>
                <TextInput
                className="mt-2 rounded-lg border border-gray-300 p-3"
                placeholder="Enter todo description"
                />
                <View className="mt-6 flex-row justify-end">
                <TouchableOpacity
                    className="mr-4 rounded-lg bg-gray-200 px-4 py-2"
                    onPress={onClose}
                >
                    <Text className="text-lg">Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="rounded-lg bg-primary px-4 py-2"
                    onPress={onClose}
                >
                    <Text className="text-lg text-white">Add</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default AddTodo