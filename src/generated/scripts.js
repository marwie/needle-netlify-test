// Test1234
import { AlignmentConstraint } from "../../node_modules/@needle-tools/engine/src/engine-components/AlignmentConstraint";
import { Animation } from "../../node_modules/@needle-tools/engine/src/engine-components/Animation";
import { AnimationCurve } from "../../node_modules/@needle-tools/engine/src/engine-components/AnimationCurve";
import { Animator } from "../../node_modules/@needle-tools/engine/src/engine-components/Animator";
import { AnimatorController } from "../../node_modules/@needle-tools/engine/src/engine-components/AnimatorController";
import { AudioListener } from "../../node_modules/@needle-tools/engine/src/engine-components/AudioListener";
import { AudioSource } from "../../node_modules/@needle-tools/engine/src/engine-components/AudioSource";
import { AvatarModel } from "../../node_modules/@needle-tools/engine/src/engine-components/AvatarLoader";
import { AvatarLoader } from "../../node_modules/@needle-tools/engine/src/engine-components/AvatarLoader";
import { AxesHelper } from "../../node_modules/@needle-tools/engine/src/engine-components/AxesHelper";
import { BasicIKConstraint } from "../../node_modules/@needle-tools/engine/src/engine-components/BasicIKConstraint";
import { BoxHelperComponent } from "../../node_modules/@needle-tools/engine/src/engine-components/BoxHelperComponent";
import { Camera } from "../../node_modules/@needle-tools/engine/src/engine-components/Camera";
import { CharacterController } from "../../node_modules/@needle-tools/engine/src/engine-components/CharacterController";
import { CharacterControllerInput } from "../../node_modules/@needle-tools/engine/src/engine-components/CharacterController";
import { Collider } from "../../node_modules/@needle-tools/engine/src/engine-components/Collider";
import { SphereCollider } from "../../node_modules/@needle-tools/engine/src/engine-components/Collider";
import { BoxCollider } from "../../node_modules/@needle-tools/engine/src/engine-components/Collider";
import { MeshCollider } from "../../node_modules/@needle-tools/engine/src/engine-components/Collider";
import { CapsuleCollider } from "../../node_modules/@needle-tools/engine/src/engine-components/Collider";
import { DeleteBox } from "../../node_modules/@needle-tools/engine/src/engine-components/DeleteBox";
import { Deletable } from "../../node_modules/@needle-tools/engine/src/engine-components/DeleteBox";
import { DeviceFlag } from "../../node_modules/@needle-tools/engine/src/engine-components/DeviceFlag";
import { DragControls } from "../../node_modules/@needle-tools/engine/src/engine-components/DragControls";
import { DropListener } from "../../node_modules/@needle-tools/engine/src/engine-components/DropListener";
import { Duplicatable } from "../../node_modules/@needle-tools/engine/src/engine-components/Duplicatable";
import { CallInfo } from "../../node_modules/@needle-tools/engine/src/engine-components/EventList";
import { EventListEvent } from "../../node_modules/@needle-tools/engine/src/engine-components/EventList";
import { EventList } from "../../node_modules/@needle-tools/engine/src/engine-components/EventList";
import { EventTrigger } from "../../node_modules/@needle-tools/engine/src/engine-components/EventTrigger";
import { FlyControls } from "../../node_modules/@needle-tools/engine/src/engine-components/FlyControls";
import { Fog } from "../../node_modules/@needle-tools/engine/src/engine-components/Fog";
import { BoxGizmo } from "../../node_modules/@needle-tools/engine/src/engine-components/Gizmos";
import { GridHelper } from "../../node_modules/@needle-tools/engine/src/engine-components/GridHelper";
import { GroundProjectedEnv } from "../../node_modules/@needle-tools/engine/src/engine-components/GroundProjection";
import { Interactable } from "../../node_modules/@needle-tools/engine/src/engine-components/Interactable";
import { UsageMarker } from "../../node_modules/@needle-tools/engine/src/engine-components/Interactable";
import { FixedJoint } from "../../node_modules/@needle-tools/engine/src/engine-components/Joints";
import { HingeJoint } from "../../node_modules/@needle-tools/engine/src/engine-components/Joints";
import { Light } from "../../node_modules/@needle-tools/engine/src/engine-components/Light";
import { LODModel } from "../../node_modules/@needle-tools/engine/src/engine-components/LODGroup";
import { LODGroup } from "../../node_modules/@needle-tools/engine/src/engine-components/LODGroup";
import { LookAtConstraint } from "../../node_modules/@needle-tools/engine/src/engine-components/LookAtConstraint";
import { NestedGltf } from "../../node_modules/@needle-tools/engine/src/engine-components/NestedGltf";
import { Networking } from "../../node_modules/@needle-tools/engine/src/engine-components/Networking";
import { OffsetConstraint } from "../../node_modules/@needle-tools/engine/src/engine-components/OffsetConstraint";
import { OrbitControls } from "../../node_modules/@needle-tools/engine/src/engine-components/OrbitControls";
import { ParticleSystemRenderer } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystem";
import { ParticleSystem } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystem";
import { SubEmitterSystem } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystem";
import { Gradient } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemModules";
import { MinMaxCurve } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemModules";
import { MinMaxGradient } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemModules";
import { MainModule } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemModules";
import { ParticleBurst } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemModules";
import { EmissionModule } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemModules";
import { ColorOverLifetimeModule } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemModules";
import { SizeOverLifetimeModule } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemModules";
import { ShapeModule } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemModules";
import { NoiseModule } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemModules";
import { TrailModule } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemModules";
import { VelocityOverLifetimeModule } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemModules";
import { TextureSheetAnimationModule } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemModules";
import { RotationOverLifetimeModule } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemModules";
import { RotationBySpeedModule } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemModules";
import { LimitVelocityOverLifetimeModule } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemModules";
import { InheritVelocityModule } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemModules";
import { SizeBySpeedModule } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemModules";
import { ColorBySpeedModule } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemModules";
import { ParticleSubEmitter } from "../../node_modules/@needle-tools/engine/src/engine-components/ParticleSystemSubEmitter";
import { PlayerColor } from "../../node_modules/@needle-tools/engine/src/engine-components/PlayerColor";
import { ReflectionProbe } from "../../node_modules/@needle-tools/engine/src/engine-components/ReflectionProbe";
import { FieldWithDefault } from "../../node_modules/@needle-tools/engine/src/engine-components/Renderer";
import { Renderer } from "../../node_modules/@needle-tools/engine/src/engine-components/Renderer";
import { MeshRenderer } from "../../node_modules/@needle-tools/engine/src/engine-components/Renderer";
import { SkinnedMeshRenderer } from "../../node_modules/@needle-tools/engine/src/engine-components/Renderer";
import { RendererLightmap } from "../../node_modules/@needle-tools/engine/src/engine-components/RendererLightmap";
import { Rigidbody } from "../../node_modules/@needle-tools/engine/src/engine-components/RigidBody";
import { ScreenCapture } from "../../node_modules/@needle-tools/engine/src/engine-components/ScreenCapture";
import { ShadowCatcher } from "../../node_modules/@needle-tools/engine/src/engine-components/ShadowCatcher";
import { RemoteSkybox } from "../../node_modules/@needle-tools/engine/src/engine-components/Skybox";
import { SmoothFollow } from "../../node_modules/@needle-tools/engine/src/engine-components/SmoothFollow";
import { SpatialTriggerReceiver } from "../../node_modules/@needle-tools/engine/src/engine-components/SpatialTrigger";
import { SpatialTrigger } from "../../node_modules/@needle-tools/engine/src/engine-components/SpatialTrigger";
import { SpectatorCamera } from "../../node_modules/@needle-tools/engine/src/engine-components/SpectatorCamera";
import { Sprite } from "../../node_modules/@needle-tools/engine/src/engine-components/SpriteRenderer";
import { SpriteSheet } from "../../node_modules/@needle-tools/engine/src/engine-components/SpriteRenderer";
import { SpriteData } from "../../node_modules/@needle-tools/engine/src/engine-components/SpriteRenderer";
import { SpriteRenderer } from "../../node_modules/@needle-tools/engine/src/engine-components/SpriteRenderer";
import { SyncedCamera } from "../../node_modules/@needle-tools/engine/src/engine-components/SyncedCamera";
import { SyncedRoom } from "../../node_modules/@needle-tools/engine/src/engine-components/SyncedRoom";
import { SyncedTransform } from "../../node_modules/@needle-tools/engine/src/engine-components/SyncedTransform";
import { TestRunner } from "../../node_modules/@needle-tools/engine/src/engine-components/TestRunner";
import { TestSimulateUserData } from "../../node_modules/@needle-tools/engine/src/engine-components/TestRunner";
import { TransformGizmo } from "../../node_modules/@needle-tools/engine/src/engine-components/TransformGizmo";
import { VideoPlayer } from "../../node_modules/@needle-tools/engine/src/engine-components/VideoPlayer";
import { Voip } from "../../node_modules/@needle-tools/engine/src/engine-components/Voip";
import { WebARCameraBackground } from "../../node_modules/@needle-tools/engine/src/engine-components/WebARCameraBackground";
import { WebARSessionRoot } from "../../node_modules/@needle-tools/engine/src/engine-components/WebARSessionRoot";
import { WebXR } from "../../node_modules/@needle-tools/engine/src/engine-components/WebXR";
import { WebAR } from "../../node_modules/@needle-tools/engine/src/engine-components/WebXR";
import { AvatarMarker } from "../../node_modules/@needle-tools/engine/src/engine-components/WebXRAvatar";
import { WebXRAvatar } from "../../node_modules/@needle-tools/engine/src/engine-components/WebXRAvatar";
import { TeleportTarget } from "../../node_modules/@needle-tools/engine/src/engine-components/WebXRController";
import { WebXRController } from "../../node_modules/@needle-tools/engine/src/engine-components/WebXRController";
import { AttachedObject } from "../../node_modules/@needle-tools/engine/src/engine-components/WebXRController";
import { XRGrabModel } from "../../node_modules/@needle-tools/engine/src/engine-components/WebXRGrabRendering";
import { XRGrabRendering } from "../../node_modules/@needle-tools/engine/src/engine-components/WebXRGrabRendering";
import { XRRig } from "../../node_modules/@needle-tools/engine/src/engine-components/WebXRRig";
import { VRUserState } from "../../node_modules/@needle-tools/engine/src/engine-components/WebXRSync";
import { WebXRSync } from "../../node_modules/@needle-tools/engine/src/engine-components/WebXRSync";
import { XRState } from "../../node_modules/@needle-tools/engine/src/engine-components/XRFlag";
import { XRFlag } from "../../node_modules/@needle-tools/engine/src/engine-components/XRFlag";
import { AvatarBlink_Simple } from "../../node_modules/@needle-tools/engine/src/engine-components/avatar/AvatarBlink_Simple";
import { AvatarEyeLook_Rotation } from "../../node_modules/@needle-tools/engine/src/engine-components/avatar/AvatarEyeLook_Rotation";
import { Avatar_POI } from "../../node_modules/@needle-tools/engine/src/engine-components/avatar/Avatar_Brain_LookAt";
import { Avatar_Brain_LookAt } from "../../node_modules/@needle-tools/engine/src/engine-components/avatar/Avatar_Brain_LookAt";
import { Avatar_MouthShapes } from "../../node_modules/@needle-tools/engine/src/engine-components/avatar/Avatar_MouthShapes";
import { Avatar_MustacheShake } from "../../node_modules/@needle-tools/engine/src/engine-components/avatar/Avatar_MustacheShake";
import { __Ignore } from "../../node_modules/@needle-tools/engine/src/engine-components/codegen/components";
import { LogStats } from "../../node_modules/@needle-tools/engine/src/engine-components/debug/LogStats";
import { GltfExportBox } from "../../node_modules/@needle-tools/engine/src/engine-components/export/gltf/GltfExport";
import { GltfExport } from "../../node_modules/@needle-tools/engine/src/engine-components/export/gltf/GltfExport";
import { USDZExporter } from "../../node_modules/@needle-tools/engine/src/engine-components/export/usdz/USDZExporter";
import { RegisteredAnimationInfo } from "../../node_modules/@needle-tools/engine/src/engine-components/export/usdz/extensions/Animation";
import { TransformData } from "../../node_modules/@needle-tools/engine/src/engine-components/export/usdz/extensions/Animation";
import { AnimationExtension } from "../../node_modules/@needle-tools/engine/src/engine-components/export/usdz/extensions/Animation";
import { RGBAColor } from "../../node_modules/@needle-tools/engine/src/engine-components/js-extensions/RGBAColor";
import { PostProcessingHandler } from "../../node_modules/@needle-tools/engine/src/engine-components/postprocessing/PostProcessingHandler";
import { Volume } from "../../node_modules/@needle-tools/engine/src/engine-components/postprocessing/Volume";
import { VolumeParameter } from "../../node_modules/@needle-tools/engine/src/engine-components/postprocessing/VolumeParameter";
import { VolumeProfile } from "../../node_modules/@needle-tools/engine/src/engine-components/postprocessing/VolumeProfile";
import { Antialiasing } from "../../node_modules/@needle-tools/engine/src/engine-components/postprocessing/Effects/Antialiasing";
import { Bloom } from "../../node_modules/@needle-tools/engine/src/engine-components/postprocessing/Effects/Bloom";
import { ChromaticAberration } from "../../node_modules/@needle-tools/engine/src/engine-components/postprocessing/Effects/ChromaticAberration";
import { ColorAdjustments } from "../../node_modules/@needle-tools/engine/src/engine-components/postprocessing/Effects/ColorAdjustments";
import { DepthOfField } from "../../node_modules/@needle-tools/engine/src/engine-components/postprocessing/Effects/DepthOfField";
import { PixelationEffect } from "../../node_modules/@needle-tools/engine/src/engine-components/postprocessing/Effects/Pixelation";
import { ScreenSpaceAmbientOcclusion } from "../../node_modules/@needle-tools/engine/src/engine-components/postprocessing/Effects/ScreenspaceAmbientOcclusion";
import { ToneMapping } from "../../node_modules/@needle-tools/engine/src/engine-components/postprocessing/Effects/Tonemapping";
import { Vignette } from "../../node_modules/@needle-tools/engine/src/engine-components/postprocessing/Effects/Vignette";
import { PlayableDirector } from "../../node_modules/@needle-tools/engine/src/engine-components/timeline/PlayableDirector";
import { SignalAsset } from "../../node_modules/@needle-tools/engine/src/engine-components/timeline/SignalAsset";
import { SignalReceiverEvent } from "../../node_modules/@needle-tools/engine/src/engine-components/timeline/SignalAsset";
import { SignalReceiver } from "../../node_modules/@needle-tools/engine/src/engine-components/timeline/SignalAsset";
import { AnimationTrackHandler } from "../../node_modules/@needle-tools/engine/src/engine-components/timeline/TimelineTracks";
import { AudioTrackHandler } from "../../node_modules/@needle-tools/engine/src/engine-components/timeline/TimelineTracks";
import { SignalTrackHandler } from "../../node_modules/@needle-tools/engine/src/engine-components/timeline/TimelineTracks";
import { ControlTrackHandler } from "../../node_modules/@needle-tools/engine/src/engine-components/timeline/TimelineTracks";
import { BaseUIComponent } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/BaseUIComponent";
import { UIRootComponent } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/BaseUIComponent";
import { Button } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/Button";
import { Canvas } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/Canvas";
import { CanvasGroup } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/CanvasGroup";
import { EventSystem } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/EventSystem";
import { Graphic } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/Graphic";
import { MaskableGraphic } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/Graphic";
import { Image } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/Image";
import { RawImage } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/Image";
import { InputField } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/InputField";
import { Keyboard } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/Keyboard";
import { LayoutGroup } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/Layout";
import { VerticalLayoutGroup } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/Layout";
import { HorizontalLayoutGroup } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/Layout";
import { GridLayoutGroup } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/Layout";
import { PointerEventData } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/PointerEvents";
import { Raycaster } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/Raycaster";
import { ObjectRaycaster } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/Raycaster";
import { GraphicRaycaster } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/Raycaster";
import { UIRaycastUtils } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/RaycastUtils";
import { Size } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/RectTransform";
import { Rect } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/RectTransform";
import { RectTransform } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/RectTransform";
import { SpatialHtml } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/SpatialHtml";
import { Text } from "../../node_modules/@needle-tools/engine/src/engine-components/ui/Text";
import { PresentationMode } from "../../node_modules/@needle-tools/engine/src/engine-components-experimental/Presentation";
import { PlayerSync } from "../../node_modules/@needle-tools/engine/src/engine-components-experimental/networking/PlayerSync";
import { PlayerState } from "../../node_modules/@needle-tools/engine/src/engine-components-experimental/networking/PlayerSync";
import { MyTest } from "../../../../../Assets/Scenes/NpmDefs/_Npmdefs/SomeOtherName~/ComponentHasTextureReference";

const out = {
	AlignmentConstraint,
	Animation,
	AnimationCurve,
	Animator,
	AnimatorController,
	AudioListener,
	AudioSource,
	AvatarModel,
	AvatarLoader,
	AxesHelper,
	BasicIKConstraint,
	BoxHelperComponent,
	Camera,
	CharacterController,
	CharacterControllerInput,
	Collider,
	SphereCollider,
	BoxCollider,
	MeshCollider,
	CapsuleCollider,
	DeleteBox,
	Deletable,
	DeviceFlag,
	DragControls,
	DropListener,
	Duplicatable,
	CallInfo,
	EventListEvent,
	EventList,
	EventTrigger,
	FlyControls,
	Fog,
	BoxGizmo,
	GridHelper,
	GroundProjectedEnv,
	Interactable,
	UsageMarker,
	FixedJoint,
	HingeJoint,
	Light,
	LODModel,
	LODGroup,
	LookAtConstraint,
	NestedGltf,
	Networking,
	OffsetConstraint,
	OrbitControls,
	ParticleSystemRenderer,
	ParticleSystem,
	SubEmitterSystem,
	Gradient,
	MinMaxCurve,
	MinMaxGradient,
	MainModule,
	ParticleBurst,
	EmissionModule,
	ColorOverLifetimeModule,
	SizeOverLifetimeModule,
	ShapeModule,
	NoiseModule,
	TrailModule,
	VelocityOverLifetimeModule,
	TextureSheetAnimationModule,
	RotationOverLifetimeModule,
	RotationBySpeedModule,
	LimitVelocityOverLifetimeModule,
	InheritVelocityModule,
	SizeBySpeedModule,
	ColorBySpeedModule,
	ParticleSubEmitter,
	PlayerColor,
	ReflectionProbe,
	FieldWithDefault,
	Renderer,
	MeshRenderer,
	SkinnedMeshRenderer,
	RendererLightmap,
	Rigidbody,
	ScreenCapture,
	ShadowCatcher,
	RemoteSkybox,
	SmoothFollow,
	SpatialTriggerReceiver,
	SpatialTrigger,
	SpectatorCamera,
	Sprite,
	SpriteSheet,
	SpriteData,
	SpriteRenderer,
	SyncedCamera,
	SyncedRoom,
	SyncedTransform,
	TestRunner,
	TestSimulateUserData,
	TransformGizmo,
	VideoPlayer,
	Voip,
	WebARCameraBackground,
	WebARSessionRoot,
	WebXR,
	WebAR,
	AvatarMarker,
	WebXRAvatar,
	TeleportTarget,
	WebXRController,
	AttachedObject,
	XRGrabModel,
	XRGrabRendering,
	XRRig,
	VRUserState,
	WebXRSync,
	XRState,
	XRFlag,
	AvatarBlink_Simple,
	AvatarEyeLook_Rotation,
	Avatar_POI,
	Avatar_Brain_LookAt,
	Avatar_MouthShapes,
	Avatar_MustacheShake,
	__Ignore,
	LogStats,
	GltfExportBox,
	GltfExport,
	USDZExporter,
	RegisteredAnimationInfo,
	TransformData,
	AnimationExtension,
	RGBAColor,
	PostProcessingHandler,
	Volume,
	VolumeParameter,
	VolumeProfile,
	Antialiasing,
	Bloom,
	ChromaticAberration,
	ColorAdjustments,
	DepthOfField,
	PixelationEffect,
	ScreenSpaceAmbientOcclusion,
	ToneMapping,
	Vignette,
	PlayableDirector,
	SignalAsset,
	SignalReceiverEvent,
	SignalReceiver,
	AnimationTrackHandler,
	AudioTrackHandler,
	SignalTrackHandler,
	ControlTrackHandler,
	BaseUIComponent,
	UIRootComponent,
	Button,
	Canvas,
	CanvasGroup,
	EventSystem,
	Graphic,
	MaskableGraphic,
	Image,
	RawImage,
	InputField,
	Keyboard,
	LayoutGroup,
	VerticalLayoutGroup,
	HorizontalLayoutGroup,
	GridLayoutGroup,
	PointerEventData,
	Raycaster,
	ObjectRaycaster,
	GraphicRaycaster,
	UIRaycastUtils,
	Size,
	Rect,
	RectTransform,
	SpatialHtml,
	Text,
	PresentationMode,
	PlayerSync,
	PlayerState,
	MyTest
};


export { out as scripts }
