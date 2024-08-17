<template>
  <Head title="Edit Project" />

  <AuthenticatedLayout>
      <template #header>
          <h2 class="font-semibold text-xl text-gray-800 leading-tight">Edit Project</h2>
      </template>

      <div class="py-5">
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <div class="p-6 text-gray-900">
                      <form @submit.prevent="submit">
                          <div>
                              <InputLabel for="skill_id" value="Skill" />
                              <select class="mt-1 block w-full pl-3 pr-10 pl-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" 
                              v-model="form.skill_id">
                                  <option disabled selected>Please choice your skill</option>
                                  <InputError class="mt-2" :message="$page.props.errors.skill_id" />
                                  <option v-for="skill in skills" :key="skill.id" :value="skill.id">{{ skill.name }}</option>
                              </select>
                          </div>

                          <div  class="mt-3">
                              <InputLabel for="name" value="Name" />

                              <TextInput
                                  id="name"
                                  type="text"
                                  class="mt-1 block w-full"
                                  v-model="form.name"
                                  required
                                  autofocus
                                  autocomplete="name"
                              />

                              <InputError class="mt-2" :message="$page.props.errors.name" />
                          </div>
                          <div class="mt-3">
                              <InputLabel for="project_url" value="Project URL" />

                              <TextInput
                                  id="project_url"
                                  type="text"
                                  class="mt-1 block w-full"
                                  v-model="form.project_url"
                                  required
                                  autocomplete="project_url"
                              />

                              <InputError class="mt-2" :message="$page.props.errors.project_url" />
                          </div>

                          <div class="mt-4">
                              <InputLabel for="image" value="Image" />

                              <TextInput
                                  id="image"
                                  type="file"
                                  class="mt-1 block w-full"
                                  @input="form.image = $event.target.files[0]"
                              />
                              <InputError class="mt-2" :message="$page.props.errors.image" />
                          </div>
                          <div class="flex items-center justify-end mt-4">
                              <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                  Update
                              </PrimaryButton>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </AuthenticatedLayout>
</template>
<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3'

const props = defineProps({
  skills: Array,
  project: Object
})


const form = useForm({
  name: props.project.name,
  skill_id: props.project.skill_id,
  image: props.project.image,
  project_url: props.project.project_url
});

const submit = () => {
  router.post(`/projects/${props.project.id}`, {
  _method: 'put',
  name: form.name,
  image: form.image,
  skill_id: form.skill_id,
  project_url: form.project_url
    });
};

</script>