import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { FaVideo, FaMicrophone, FaMicrophoneSlash, FaVideoSlash, FaUsers, FaShare, FaComments, FaCog, FaPhone, FaPhoneSlash, FaLightbulb, FaRocket, FaCode, FaServer, FaCloud, FaMobile, FaDatabase, FaShieldAlt, FaAws } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const VideoConference = () => {
  const { t } = useTranslation();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isInCall, setIsInCall] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <Navbar />
      
      {/* Main Video Conference Interface */}
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="fade-in">
          {/* Header */}
          <div className="text-center mb-12">
                         <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
               {t('videoconference.title')}
             </h1>
             <p className="text-xl text-gray-100 mb-4">
               {t('videoconference.subtitle')}
             </p>
             <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
               {t('videoconference.conceptualDemo')}
             </div>
          </div>

          {/* Project Overview */}
          <div className="glass-effect rounded-2xl p-8 mb-12">
                         <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
               <FaLightbulb className="mr-3 text-primary" />
               {t('videoconference.projectOverview')}
             </h2>
             <div className="text-gray-100 leading-relaxed mb-6">
               <p className="mb-4">
                 {t('videoconference.overview')}
               </p>
             </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                                 <h3 className="text-xl font-semibold text-white mb-4">{t('videoconference.solutionArchitecture')}</h3>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 mb-4">
                  <div className="text-center">
                    {/* Architecture Diagram Representation */}
                    <div className="mb-4">
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {/* Client Layer */}
                        <div className="col-span-1 text-center">
                          <div className="bg-blue-500/20 rounded p-2 text-xs">
                            <div className="w-4 h-4 bg-blue-400 rounded mx-auto mb-1"></div>
                            <div className="w-3 h-3 bg-blue-400 rounded mx-auto mb-1"></div>
                            <div className="w-3 h-3 bg-blue-400 rounded mx-auto mb-1"></div>
                            <div className="w-3 h-3 bg-blue-400 rounded mx-auto mb-1"></div>
                            <div className="w-3 h-3 bg-blue-400 rounded mx-auto mb-1"></div>
                            <div className="w-3 h-3 bg-blue-400 rounded mx-auto mb-1"></div>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">Clients</p>
                        </div>
                        
                        {/* CloudFront Layer */}
                        <div className="col-span-1 text-center">
                          <div className="bg-orange-500/20 rounded p-2 text-xs">
                            <div className="w-4 h-4 bg-orange-400 rounded mx-auto mb-1"></div>
                            <div className="w-4 h-4 bg-orange-400 rounded mx-auto mb-1"></div>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">CloudFront</p>
                        </div>
                        
                        {/* Twilio Layer */}
                        <div className="col-span-1 text-center">
                          <div className="bg-red-500/20 rounded p-2 text-xs">
                            <div className="w-4 h-4 bg-red-400 rounded mx-auto mb-1"></div>
                            <div className="w-4 h-4 bg-red-400 rounded mx-auto mb-1"></div>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">Twilio</p>
                        </div>
                        
                        {/* Lambda Functions */}
                        <div className="col-span-1 text-center">
                          <div className="bg-yellow-500/20 rounded p-2 text-xs">
                            <div className="w-3 h-3 bg-yellow-400 rounded mx-auto mb-1"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded mx-auto mb-1"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded mx-auto mb-1"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded mx-auto mb-1"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded mx-auto mb-1"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded mx-auto mb-1"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded mx-auto mb-1"></div>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">Lambdas</p>
                        </div>
                        
                        {/* API Gateway */}
                        <div className="col-span-1 text-center">
                          <div className="bg-green-500/20 rounded p-2 text-xs">
                            <div className="w-4 h-4 bg-green-400 rounded mx-auto mb-1"></div>
                            <div className="w-4 h-4 bg-green-400 rounded mx-auto mb-1"></div>
                            <div className="w-4 h-4 bg-green-400 rounded mx-auto mb-1"></div>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">API Gateway</p>
                        </div>
                        
                        {/* VPC */}
                        <div className="col-span-1 text-center">
                          <div className="bg-purple-500/20 rounded p-2 text-xs">
                            <div className="w-4 h-4 bg-purple-400 rounded mx-auto mb-1"></div>
                            <div className="w-4 h-4 bg-purple-400 rounded mx-auto mb-1"></div>
                            <div className="w-4 h-4 bg-purple-400 rounded mx-auto mb-1"></div>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">VPC</p>
                        </div>
                        
                        {/* Database */}
                        <div className="col-span-1 text-center">
                          <div className="bg-indigo-500/20 rounded p-2 text-xs">
                            <div className="w-4 h-4 bg-indigo-400 rounded mx-auto mb-1"></div>
                            <div className="w-4 h-4 bg-indigo-400 rounded mx-auto mb-1"></div>
                            <div className="w-4 h-4 bg-indigo-400 rounded mx-auto mb-1"></div>
                            <div className="w-4 h-4 bg-indigo-400 rounded mx-auto mb-1"></div>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">DynamoDB</p>
                        </div>
                      </div>
                      
                      {/* Connection Lines */}
                      <div className="relative h-8">
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-blue-400 via-orange-400 to-indigo-400"></div>
                        <div className="absolute top-1/2 left-1/7 w-px h-full bg-gradient-to-b from-blue-400 to-orange-400"></div>
                        <div className="absolute top-1/2 left-2/7 w-px h-full bg-gradient-to-b from-orange-400 to-red-400"></div>
                        <div className="absolute top-1/2 left-3/7 w-px h-full bg-gradient-to-b from-red-400 to-yellow-400"></div>
                        <div className="absolute top-1/2 left-4/7 w-px h-full bg-gradient-to-b from-yellow-400 to-green-400"></div>
                        <div className="absolute top-1/2 left-5/7 w-px h-full bg-gradient-to-b from-green-400 to-purple-400"></div>
                        <div className="absolute top-1/2 left-6/7 w-px h-full bg-gradient-to-b from-purple-400 to-indigo-400"></div>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm">Serverless Architecture Diagram</p>
                    <p className="text-xs text-gray-500 mt-1">AWS Lambda + API Gateway + DynamoDB + CloudFront</p>
                  </div>
                </div>
                                 <p className="text-gray-100 text-sm">
                   {t('videoconference.architectureDesc')}
                 </p>
              </div>
              <div>
                                 <h3 className="text-xl font-semibold text-white mb-4">{t('videoconference.deploymentStrategy')}</h3>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 mb-4">
                  <div className="text-center text-gray-400">
                                         <FaRocket className="text-4xl mx-auto mb-4 text-primary" />
                     <p>{t('videoconference.blueGreenDeployment')}</p>
                     <div className="mt-4 space-y-2">
                       <div className="flex items-center justify-center space-x-2">
                         <div className="w-3 h-3 bg-blue-500 rounded"></div>
                         <span className="text-xs">{t('videoconference.blueEnvironment')}</span>
                       </div>
                       <div className="flex items-center justify-center space-x-2">
                         <div className="w-3 h-3 bg-green-500 rounded"></div>
                         <span className="text-xs">{t('videoconference.greenEnvironment')}</span>
                       </div>
                       <div className="flex items-center justify-center space-x-2">
                         <div className="w-3 h-3 bg-purple-500 rounded"></div>
                         <span className="text-xs">{t('videoconference.production')}</span>
                       </div>
                     </div>
                  </div>
                </div>
                                 <p className="text-gray-100 text-sm">
                   {t('videoconference.deploymentDesc')}
                 </p>
              </div>
            </div>
          </div>

          {/* Project Objectives */}
          <div className="glass-effect rounded-2xl p-8 mb-12">
                         <h2 className="text-3xl font-bold text-white mb-6">{t('videoconference.projectObjectives')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                                 {[
                   t('videoconference.objectives.objective1'),
                   t('videoconference.objectives.objective2'),
                   t('videoconference.objectives.objective3'),
                   t('videoconference.objectives.objective4')
                 ].map((objective, index) => (
                   <div key={index} className="flex items-start">
                     <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                       <span className="text-white text-sm font-bold">{index + 1}</span>
                     </div>
                     <p className="text-gray-100 text-sm leading-relaxed">{objective}</p>
                   </div>
                 ))}
              </div>
              <div className="space-y-4">
                                 {[
                   t('videoconference.objectives.objective5'),
                   t('videoconference.objectives.objective6'),
                   t('videoconference.objectives.objective7')
                 ].map((objective, index) => (
                   <div key={index + 4} className="flex items-start">
                     <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                       <span className="text-white text-sm font-bold">{index + 5}</span>
                     </div>
                     <p className="text-gray-100 text-sm leading-relaxed">{objective}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          {/* Architecture Details */}
          <div className="glass-effect rounded-2xl p-8 mb-12">
                         <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
               <FaServer className="mr-3 text-primary" />
               {t('videoconference.architectureTeam')}
             </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                                 <h3 className="text-xl font-semibold text-white mb-4">{t('videoconference.teamStructure')}</h3>
                <div className="space-y-3">
                                     {[
                     { role: t('videoconference.teamRoles.architect'), count: 1 },
                     { role: t('videoconference.teamRoles.backendDevs'), count: 3 },
                     { role: t('videoconference.teamRoles.frontendDevs'), count: 2 },
                     { role: t('videoconference.teamRoles.mobileDevs'), count: 2 },
                     { role: t('videoconference.teamRoles.qaEngineers'), count: 3 },
                     { role: t('videoconference.teamRoles.productOwner'), count: 1 },
                     { role: t('videoconference.teamRoles.manager'), count: 1 }
                   ].map((member, index) => (
                     <div key={index} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                       <span className="text-gray-100">{member.role}</span>
                       <span className="text-primary font-semibold">{member.count}</span>
                     </div>
                   ))}
                </div>
              </div>
              
              <div>
                                 <h3 className="text-xl font-semibold text-white mb-4">{t('videoconference.apiArchitecture')}</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                         <h4 className="text-blue-300 font-semibold mb-2">{t('videoconference.publicApi')}</h4>
                                         <p className="text-gray-100 text-sm">
                       {t('videoconference.apiDescriptions.publicApiDesc')}
                     </p>
                  </div>
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                                         <h4 className="text-green-300 font-semibold mb-2">{t('videoconference.privateApi')}</h4>
                                         <p className="text-gray-100 text-sm">
                       {t('videoconference.apiDescriptions.privateApiDesc')}
                     </p>
                  </div>
                  <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                                         <h4 className="text-purple-300 font-semibold mb-2">{t('videoconference.playersApi')}</h4>
                                         <p className="text-gray-100 text-sm">
                       {t('videoconference.apiDescriptions.playersApiDesc')}
                     </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <FaAws className="text-4xl mx-auto mb-3 text-primary" />
                                 <h4 className="text-white font-semibold mb-2">{t('videoconference.awsInfrastructure')}</h4>
                                 <p className="text-gray-100 text-sm">
                   {t('videoconference.infrastructureDescriptions.awsDesc')}
                 </p>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <FaMobile className="text-4xl mx-auto mb-3 text-primary" />
                                 <h4 className="text-white font-semibold mb-2">{t('videoconference.frontendPlatforms')}</h4>
                                 <p className="text-gray-100 text-sm">
                   {t('videoconference.infrastructureDescriptions.frontendDesc')}
                 </p>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <FaShieldAlt className="text-4xl mx-auto mb-3 text-primary" />
                                 <h4 className="text-white font-semibold mb-2">{t('videoconference.securityDeployment')}</h4>
                                 <p className="text-gray-100 text-sm">
                   {t('videoconference.infrastructureDescriptions.securityDesc')}
                 </p>
              </div>
            </div>
          </div>

                    {/* Solution Architecture */}
          <div className="glass-effect rounded-2xl p-8 mb-12">
                         <h2 className="text-3xl font-bold text-white mb-6">{t('videoconference.solutionArchitecture')}</h2>
            
            {/* Architecture Diagram */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden mb-8">
                <div className="relative">
                  {/* Architecture Image */}
                  <img 
                    src="/video-conference.png" 
                    alt="Video Conference Architecture Diagram" 
                    className="w-full h-auto rounded-3xl"
                  />
                  
                  {/* Overlay with title */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                                         <h3 className="text-white font-semibold text-lg">{t('videoconference.awsComponents')}</h3>
                  </div>
                </div>
              </div>

              {/* Architecture Description */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                                     <h3 className="text-xl font-semibold text-white mb-4">{t('videoconference.keyComponents')}</h3>
                  <div className="space-y-3">
                                         {[
                       t('videoconference.components.clientApps'),
                       t('videoconference.components.cloudFront'),
                       t('videoconference.components.apiGateway'),
                       t('videoconference.components.lambdaFunctions'),
                       t('videoconference.components.dynamoDB'),
                       t('videoconference.components.s3'),
                       t('videoconference.components.videoServices')
                     ].map((component, index) => (
                       <div key={index} className="flex items-start">
                         <div className="w-2 h-2 gradient-bg rounded-full mr-3 mt-2 flex-shrink-0"></div>
                         <p className="text-gray-100 text-sm">{component}</p>
                       </div>
                     ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                                     <h3 className="text-xl font-semibold text-white mb-4">{t('videoconference.dataFlow')}</h3>
                  <div className="space-y-3">
                                         {[
                       t('videoconference.dataFlow.flow1'),
                       t('videoconference.dataFlow.flow2'),
                       t('videoconference.dataFlow.flow3'),
                       t('videoconference.dataFlow.flow4'),
                       t('videoconference.dataFlow.flow5'),
                       t('videoconference.dataFlow.flow6'),
                       t('videoconference.dataFlow.flow7')
                     ].map((flow, index) => (
                       <div key={index} className="flex items-start">
                         <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                         <p className="text-gray-100 text-sm">{flow}</p>
                       </div>
                     ))}
                  </div>
                </div>
              </div>

              {/* Interactive Elements */}
              <div className="glass-effect rounded-3xl p-6">
                                 <h3 className="text-xl font-semibold text-white mb-4 text-center">{t('videoconference.architectureHighlights')}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                                     <div className="text-center p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                     <FaServer className="text-3xl mx-auto mb-3 text-blue-300" />
                     <h4 className="text-white font-semibold mb-2">{t('videoconference.serverless')}</h4>
                     <p className="text-gray-100 text-sm">
                       {t('videoconference.architectureDescriptions.serverlessDesc')}
                     </p>
                   </div>
                   <div className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                     <FaShieldAlt className="text-3xl mx-auto mb-3 text-green-300" />
                     <h4 className="text-white font-semibold mb-2">{t('videoconference.scalable')}</h4>
                     <p className="text-gray-100 text-sm">
                       {t('videoconference.architectureDescriptions.scalableDesc')}
                     </p>
                   </div>
                   <div className="text-center p-4 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                     <FaAws className="text-3xl mx-auto mb-3 text-purple-300" />
                     <h4 className="text-white font-semibold mb-2">{t('videoconference.awsNative')}</h4>
                     <p className="text-gray-100 text-sm">
                       {t('videoconference.architectureDescriptions.awsNativeDesc')}
                     </p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="glass-effect rounded-2xl p-8 mb-8">
                         <h2 className="text-3xl font-bold text-white mb-6">{t('videoconference.technicalImplementation')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                                 <h3 className="text-xl font-semibold text-white mb-4">{t('videoconference.frontendImplementation')}</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                                         <h4 className="text-white font-semibold mb-2">{t('videoconference.reactWebApp')}</h4>
                                         <p className="text-gray-100 text-sm mb-2">
                       {t('videoconference.technicalDescriptions.reactWebDesc1')}
                     </p>
                     <p className="text-gray-100 text-sm">
                       {t('videoconference.technicalDescriptions.reactWebDesc2')}
                     </p>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                                         <h4 className="text-white font-semibold mb-2">{t('videoconference.mobileApps')}</h4>
                                         <p className="text-gray-100 text-sm mb-2">
                       {t('videoconference.technicalDescriptions.mobileDesc1')}
                     </p>
                     <p className="text-gray-100 text-sm">
                       {t('videoconference.technicalDescriptions.mobileDesc2')}
                     </p>
                  </div>
                </div>
              </div>
              <div>
                                 <h3 className="text-xl font-semibold text-white mb-4">{t('videoconference.backendArchitecture')}</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                                         <h4 className="text-white font-semibold mb-2">{t('videoconference.serverlessFunctions')}</h4>
                                         <p className="text-gray-100 text-sm mb-2">
                       {t('videoconference.technicalDescriptions.lambdaDesc1')}
                     </p>
                     <p className="text-gray-100 text-sm">
                       {t('videoconference.technicalDescriptions.lambdaDesc2')}
                     </p>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                                         <h4 className="text-white font-semibold mb-2">{t('videoconference.dataStorage')}</h4>
                                         <p className="text-gray-100 text-sm mb-2">
                       {t('videoconference.technicalDescriptions.storageDesc1')}
                     </p>
                     <p className="text-gray-100 text-sm">
                       {t('videoconference.technicalDescriptions.storageDesc2')}
                     </p>
                  </div>
                </div>
              </div>
            </div>
                         <div className="mt-8 p-4 bg-blue-500/20 border border-blue-500/30 rounded-xl">
                               <p className="text-blue-100 text-sm">
                  <strong>{t('videoconference.note').split(':')[0]}:</strong> {t('videoconference.note').split(':')[1]}
                </p>
             </div>
          </div>

          {/* Back to Portfolio */}
          <div className="text-center">
            <Link to="/portfolio">
              <Button 
                size="lg" 
                className="gradient-bg text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                                 {t('videoconference.backToPortfolio')}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoConference;
