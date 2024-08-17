<template>
    <Head title="Skills" />

    <AuthenticatedLayout>
      <template #header>
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">Skills</h2> 
      </template>

        <div class="py-5">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <div class="mb-5 flex justify-end">
                            <Link :href="route('skills.create')" 
                            class="p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">New Skills</Link>
                        </div>
                        
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            ID
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Image
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" v-for="skill in skills.data" :key="skill.id">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
											{{ skill.id }}
										</th>
										<td class="px-6 py-4">
											{{ skill.name }}
                                        </td>
                                        <td class="px-6 py-4">
                                            <img :src="skill.image" alt="" class="h-20">
                                        </td>
                                        <td class="px-6 py-4">
                                            <Link :href="route('skills.edit', skill.id )" 
                            				class="py-3 px-5 bg-yellow-500 hover:bg-yellow-700 text-white rounded-md">Edit</Link>
											<Link :href="route('skills.destroy', skill.id )"
                                            method="DELETE"
                                            as="button"
                                            type="button" 
                            				class="py-3 px-5 ml-4 bg-red-500 hover:bg-red-700 text-white rounded-md">Delete</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';

defineProps({
	skills: Object
})
</script>