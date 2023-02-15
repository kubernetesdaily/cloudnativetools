/**
 * Every entry must include a title and filename, the rest are optional.
 * For simplicity in merges, please add to the bottom of the object.
 *
 * interface
 * {
 *     title: string // display name
 *     filename: string // the name of your HTML file which contain learning resources
 *     description?: string // description that will be listed with your entry
 *     author?: string // your name/tag that will be listed
 *     github?: string // username on github that will display a link to your repo
 *     compatibleBrowsers?: array // browsers that this page is compatible with
 * }
 */




const entries = [
  //A

  {
	title: "aptakub",
	filename: "",
	description: "A modern, lightweight and multi-cluster desktop client for Kubernetes. Connect to multiple clusters simultaneously to view, edit and manage all your resources.",
	tag: "Development Tools",
 	github: "aptakube/aptakube",
},

  //b 

{
	title: "breeze",
	filename: "",
	description: "Deploy a Production Ready Kubernetes Cluster with graphical interface",
	tag: "Cluster Management",
	github: "wise2c-devops/breeze",
},


  //c

{
	title: "clusterman",
	filename: "",
	description: "Clusterman - Autoscale and Manage your compute clusters",
	tag: "Cluster Management",
	github: "Yelp/clusterman",
},

{
	title: "claudie",
	filename: "",
	description: "Cloud-agnostic managed Kubernetes",
	tag: "Cluster Management",
	github: "berops/claudie",
},

{
	title: "cluster-api",
	filename: "",
	description: "Home for Cluster API, a subproject of sig-cluster-lifecycle",
	tag: "Cluster Management",
	github: "kubernetes-sigs/cluster-api",
},

{
	title: "clusterpedia",
	filename: "",
	description: "Clusterpedia is used for complex resource searches across multiple clusters, support simultaneous search of a single kind of resource or multiple kinds of resources existing in multiple clusters",
	tag: "Cluster Management",
	github: "clusterpedia-io/clusterpedia",
},


  //d


  // e


{
	title: "eksctl",
	filename: "",
	description: "Home for Cluster API, a subproject of sig-cluster-lifecycle",
	tag: "Cluster Management",
	github: "weaveworks/eksctl",
},


  // f

  // g

  {
	title: "garden",
	filename: "",
	description: "Garden provides production-like Kubernetes testing environments for integration tests, QA, and development.",
	tag: "Development Tools",
	github: "garden-io/garden",
},

{
	title: "gefyra",
	filename: "",
	description: "Gefyra blazingly-fast, rock-solid, local application development ➡️ with Kubernetes.",
	tag: "Development Tools",
	github: "gefyrahq/gefyra",
},





  // h 


{
	title: "harvester",
	filename: "",
	description: "Open source hyperconverged infrastructure (HCI) software",
	tag: "Cluster Management",
	github: "harvester/harvester",
},

{
	title: "hierarchical-namespaces",
	filename: "",
	description: "Hierarchical namespaces make it easier to share your cluster by making namespaces more powerful.",
	tag: "Cluster Management",
	github: "kubernetes-sigs/hierarchical-namespaces",
},

  // i 

  // j

  {
	title: "jkube",
	filename: "",
	description: "Tools and plugins for Java developers that help you create container images along with the required manifests to deploy your applications to Kubernetes.",
	tag: "Development Tools",
	github: "eclipse/jkube",
},

  // k

  {
	title: "keda",
	filename: "",
	description: "Event-driven Autoscaling in Kubernetes",
	tag: "Cluster Management",
	github: "kedacore/keda",
},

  {
	title: "kind",
	filename: "",
	description: "Kubernetes IN Docker - local clusters for testing Kubernetes",
	tag: "Cluster Management",
	github: "kubernetes-sigs/kind",
},

{
	title: "kruise",
	filename: "",
	description: "Kruise consists of several controllers which extend and complement the Kubernetes core controllers for workload management.",
	tag: "Cluster Management",
	github: "openkruise/kruise",
},

{
	title: "ko",
	filename: "",
	description: "ko is a tool for building and deploying Golang applications to Kubernetes.",
	tag: "Development Tools",
	github: "ko-build/ko",
},


{
	title: "konfig",
	filename: "",
	description: "Konfig is a Kubernetes friendly Rails gem. It can load configuration and secrets from both YAML or folders with individual files and present them to your application the same way.",
	tag: "Development Tools",
	github: "cloud66-oss/konfig",
},

{
	title: "kOps",
	filename: "",
	description: "Kubernetes Operations (kOps) - Production Grade k8s Installation, Upgrades and Management",
	tag: "Cluster Management",
	github: "kubernetes/kops",
},


{
	title: "kubedirector",
	filename: "",
	description: "KubeDirector uses standard Kubernetes (K8s) facilities of custom resources and API extensions to implement stateful scaleout application clusters.",
	tag: "Cluster Management",
	github: "bluek8s/kubedirector",
},

{
	title: "kubenav",
	filename: "",
	description: "kubenav is the navigator for your Kubernetes clusters right in your pocket",
	tag: "Cluster Management",
	github: "kubenav/kubenav",
},


{
	title: "kubectl-warp",
	filename: "",
	description: "Kubernetes CLI plugin for syncing and executing local files in Pod on Kubernetes",
	tag: "Development Tools",
	github: "ernoaapa/kubectl-warp",
},

{
	title: "kubernix",
	filename: "",
	description: "This project aims to provide single dependency Kubernetes clusters for local testing, experimenting and development purposes.",
	tag: "Development Tools",
	github: "saschagrunert/kubernix",
},






{
	title: "kubesphere",
	filename: "",
	description: "The container platform tailored for Kubernetes multi-cloud, datacenter, and edge management ",
	tag: "Cluster Management",
	github: "kubesphere/kubesphere",
},

{
	title: "kubespray",
	filename: "",
	description: "Deploy a Production Ready Kubernetes Cluster ",
	tag: "Cluster Management",
	github: "kubernetes-sigs/kubespray",
},

{
	title: "kubicorn",
	filename: "",
	description: "Simple, cloud native infrastructure for Kubernetes",
	tag: "Cluster Management",
	github: "kubicorn/kubicorn",
},

{
	title: "kubeone",
	filename: "",
	description: "Kubermatic KubeOne automate cluster operations on all your cloud, on-prem, edge, and IoT environments",
	tag: "Cluster Management",
	github: "kubermatic/kubeone",
},

{
	title: "kubespray",
	filename: "",
	description: "Deploy a Production Ready Kubernetes Cluster",
	tag: "Cluster Management",
	github: "kubernetes-sigs/kubespray",
},


{
	title: "kubevious",
	filename: "",
	description: "Kubevious renders all configurations relevant to the application in one place. That saves a lot of time from operators, eliminating the need for looking up settings and digging within selectors and labels.",
	tag: "Development Tools",
	github: "kubevious/Kubevious",
},

{
	title: "kops",
	filename: "",
	description: "Kubernetes Operations (kOps) - Production Grade k8s Installation, Upgrades and Management",
	tag: "Cluster Management",
	github: "kubernetes/kops",
},



{
	title: "k0s",
	filename: "",
	description: "k0s - The Zero Friction Kubernetes",
	tag: "Cluster Management",
	github: "k0sproject/k0s",
},

{
	title: "k3d",
	filename: "",
	description: "k3d,and Windows.,destroy,half the memory,highly available,is a tool for running local k3s clusters in docker. It's a single binary about 20 MB. You need to have docker installed.",
	tag: "Cluster Management",
	github: "k3d-io/k3d",
},

{
	title: "k3s",
	filename: "",
	description: "Lightweight Kubernetes. Easy to install,Kubernetes clusters from the command line ",
	tag: "Cluster Management",
	github: "https://github.com/rancher/k3s",
},


  // l

  {
	title: "liqo",
	filename: "",
	description: "Liqo implements Dynamic resource sharing across different Kubernetes clusters (e.g.; offloading pods and services), supporting decentralized governance",
	tag: "Cluster Management",
	github: "liqotech/liqo",
},

  // M

  {
	title: "matchbox",
	filename: "",
	description: "Network boot and provision Fedora CoreOS and Flatcar Linux clusters",
	tag: "Cluster Management",
	github: "poseidon/matchbox",
},

{   title: "monokle",
    filename: "",
	description: "Monokle streamlines the process of creating, analyzing, and deploying Kubernetes configurations by providing a unified visual tool for authoring YAML manifests, validating policies, and managing live clusters.",
	tag: "Cluster Management",
	github: "kubeshop/monokle",
},
  {
	title: "metalk8s",
	filename: "",
	description: "An opinionated Kubernetes distribution with a focus on long-term on-prem deployments",
	tag: "Cluster Management",
	github: "scality/metalk8s",
},

{
	title: "microk8s",
	filename: "",
	description: "MicroK8s is a small, fast, single-package Kubernetes for developers, IoT and edge",
	tag: "Cluster Management",
	github: "canonical/microk8s",
},

{
	title: "minikube",
	filename: "",
	description: "minikube implements a local Kubernetes cluster on macOS,Linux,all in a binary less than 100 MB.",
	tag: "Cluster Management",
	github: "kubernetes/minikube",
},




	//N 


	// O 

	{
		title: "okteto",
		filename: "",
		description: "okteto accelerates the development workflow of Kubernetes applications.",
		tag: "Development Tools",
		github: "okteto/okteto",
	},

	// P 

	// Q 

	// R 

	// S

	{
		title: "silver-surfer",
		filename: "",
		description: "sealos is a Kubernetes distribution, a general-purpose cloud operating system for managing cloud-native applications. ",
		tag: "Cluster Management",
		github: "labring/sealos",
	},



	// T 

	{
		title: "tanka",
		filename: "",
		description: "The clean, concise and super flexible alternative to YAML for your Kubernetes cluster.",
		tag: "Cluster Management",
		github: "grafana/tanka",
	},
	{
		title: "telepresence",
		filename: "",
		description: "Telepresence provides fast, realistic local development for Kubernetes microservices.",
		tag: "Development Tools",
		github: "telepresenceio/telepresence",
	},

	{
		title: "tilt",
		filename: "",
		description: "Tilt powers multi-service development and makes sure they behave.",
		tag: "Development Tools",
		github: "tilt-dev/tilt",
	},

	{
		title: "tye",
		filename: "",
		description: "Tye is a developer tool that makes developing, testing, and deploying microservices and distributed applications easier.",
		tag: "Development Tools",
		github: "dotnet/tye",
	},

	{
		title: "typhoon",
		filename: "",
		description: "Minimal and free Kubernetes distribution with Terraform ",
		tag: "Cluster Management",
		github: "poseidon/typhoon",
	},

	

	// U 


	// V 


	// W 

	{
		title: "werf",
		filename: "",
		description: "CLI tool for implementing efficient and consistent software delivery to Kubernetes via gluing well-known technologies (Helm, etc.) and facilitating best practices",
		tag: "Development Tools",
		github: "werf/werf",
	}

	// X 


	// Y 

	// Z 


];
