<script>
export default{
    name: 'BaseInput',
    emits:['update:modelValue'],
    props: {
        name : String,
        label: String,
        modelValue: String,
        type:{
            type: String,
            default: 'text',
        },

    },
};
</script>

<template>
<label :for="name">
    <p>{{label}}</p>
    <input
    :type="type"
    :placeholder="label"
    :value="modelValue"
    @input="$emit('update:modelValue',$event.target.value)"
    />
</label>
</template>