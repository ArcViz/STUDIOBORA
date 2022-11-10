(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"backgroundColorRatios":[0],"borderSize":0,"desktopMipmappingEnabled":false,"propagateClick":false,"gap":10,"backgroundOpacity":1,"width":"100%","defaultVRPointer":"laser","paddingLeft":0,"paddingTop":0,"scripts":{"initQuiz":TDV.Tour.Script.initQuiz,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"quizStart":TDV.Tour.Script.quizStart,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"existsKey":TDV.Tour.Script.existsKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showPopupImage":TDV.Tour.Script.showPopupImage,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getKey":TDV.Tour.Script.getKey,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"openLink":TDV.Tour.Script.openLink,"playAudioList":TDV.Tour.Script.playAudioList,"init":TDV.Tour.Script.init,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"clone":TDV.Tour.Script.clone,"isPanorama":TDV.Tour.Script.isPanorama,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"downloadFile":TDV.Tour.Script.downloadFile,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"unregisterKey":TDV.Tour.Script.unregisterKey,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"quizFinish":TDV.Tour.Script.quizFinish,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"registerKey":TDV.Tour.Script.registerKey,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"initAnalytics":TDV.Tour.Script.initAnalytics,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"historyGoForward":TDV.Tour.Script.historyGoForward,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"historyGoBack":TDV.Tour.Script.historyGoBack,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getComponentByName":TDV.Tour.Script.getComponentByName,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getOverlays":TDV.Tour.Script.getOverlays,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"shareSocial":TDV.Tour.Script.shareSocial,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"cloneCamera":TDV.Tour.Script.cloneCamera,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setValue":TDV.Tour.Script.setValue,"getMainViewer":TDV.Tour.Script.getMainViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPixels":TDV.Tour.Script.getPixels,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setLocale":TDV.Tour.Script.setLocale,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showWindow":TDV.Tour.Script.showWindow,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"mixObject":TDV.Tour.Script.mixObject,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"executeJS":TDV.Tour.Script.executeJS,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"translate":TDV.Tour.Script.translate,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex},"id":"rootPlayer","overflow":"hidden","paddingBottom":0,"mouseWheelEnabled":true,"paddingRight":0,"scrollBarVisible":"rollOver","horizontalAlign":"left","borderRadius":0,"backgroundColorDirection":"vertical","contentOpaque":false,"backgroundPreloadEnabled":true,"vrPolyfillScale":0.75,"height":"100%","defaultMenu":["fullscreen","mute","rotation"],"verticalAlign":"top","backgroundColor":["#FFFFFF"],"layout":"absolute","scrollBarOpacity":0.5,"scrollBarColor":"#000000","scrollBarWidth":10,"mobileMipmappingEnabled":false,"definitions": [{"borderSize":0,"scaleMode":"fit_inside","backgroundOpacity":0,"propagateClick":false,"width":"7%","borderRadius":0,"url":trans('Image_4DA314CA_5E1A_8E3C_41C9_544F2A0DC383_mobile.url'),"paddingTop":0,"id":"Image_4DA314CA_5E1A_8E3C_41C9_544F2A0DC383_mobile","paddingLeft":0,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"center","verticalAlign":"middle","bottom":"12.2%","height":"5.943%","click":"this.openLink(this.translate('LinkBehaviour_6C5ACECB_63A0_444B_41B5_A82B8EDCA9DB.source'), '_blank')","toolTipHorizontalAlign":"center","class":"Image","left":"2.5%","minHeight":1,"minWidth":1,"shadow":false,"data":{"name":"Image11555"}},{"borderSize":0,"scaleMode":"fit_inside","backgroundOpacity":0,"propagateClick":false,"width":"8.333%","borderRadius":0,"url":trans('Image_4C3A9F12_5E1B_7A2C_41CE_67B04B525DC4_mobile.url'),"paddingTop":0,"id":"Image_4C3A9F12_5E1B_7A2C_41CE_67B04B525DC4_mobile","paddingLeft":0,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"center","verticalAlign":"middle","bottom":"5.2%","height":"6.589%","click":"this.openLink(this.translate('LinkBehaviour_6C5F7ED1_63A0_4457_41CD_BC1B81A2E554.source'), '_blank')","toolTipHorizontalAlign":"center","class":"Image","left":"2.11%","minHeight":1,"minWidth":1,"shadow":false,"data":{"name":"Image11752"}},{"displayOriginPosition":{"hfov":165,"yaw":0,"class":"RotationalCameraDisplayPosition","pitch":-90,"stereographicFactor":1},"hoverFactor":0,"initialSequence":"this.sequence_57989604_5DEB_8A34_4195_E80695C02796","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"displayMovements":[{"easing":"linear","class":"TargetRotationalCameraDisplayMovement","duration":1000},{"easing":"cubic_in_out","targetPitch":0,"class":"TargetRotationalCameraDisplayMovement","duration":3000,"targetStereographicFactor":0}],"class":"PanoramaCamera","id":"panorama_515C0732_5DEB_8A6C_41D4_5CFD0DF63DF2_camera"},{"class":"PlayList","items":[{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_515C0732_5DEB_8A6C_41D4_5CFD0DF63DF2_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.panorama_515C0732_5DEB_8A6C_41D4_5CFD0DF63DF2","class":"PanoramaPlayListItem"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_57B3C8FB_5DEB_87DC_41BD_0AD7AB8538F6_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","media":"this.panorama_57B3C8FB_5DEB_87DC_41BD_0AD7AB8538F6","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"hfov":360,"vfov":180,"adjacentPanoramas":[{"distance":2.42,"yaw":64.17,"select":"this.overlay_4ED125C3_5E7F_8E2C_41C5_BCBC90180243.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_4ED125C3_5E7F_8E2C_41C5_BCBC90180243"},"backwardYaw":-38.65,"class":"AdjacentPanorama","panorama":"this.panorama_515C0732_5DEB_8A6C_41D4_5CFD0DF63DF2"}],"pitch":0,"id":"panorama_57B3C8FB_5DEB_87DC_41BD_0AD7AB8538F6","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_57B3C8FB_5DEB_87DC_41BD_0AD7AB8538F6_t.jpg","cube":{"levels":[{"tags":"ondemand","width":12288,"colCount":24,"url":"media/panorama_57B3C8FB_5DEB_87DC_41BD_0AD7AB8538F6_0/{face}/0/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","rowCount":4},{"tags":"ondemand","width":6144,"colCount":12,"url":"media/panorama_57B3C8FB_5DEB_87DC_41BD_0AD7AB8538F6_0/{face}/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","rowCount":2},{"tags":["ondemand","preload"],"width":3072,"colCount":6,"url":"media/panorama_57B3C8FB_5DEB_87DC_41BD_0AD7AB8538F6_0/{face}/2/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","rowCount":1},{"tags":"mobilevr","width":9216,"colCount":6,"url":"media/panorama_57B3C8FB_5DEB_87DC_41BD_0AD7AB8538F6_0/{face}/vr/0.jpg","height":1536,"class":"TiledImageResourceLevel","rowCount":1},{"tags":"mobilevr2gen","width":12288,"colCount":6,"url":"media/panorama_57B3C8FB_5DEB_87DC_41BD_0AD7AB8538F6_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"}}],"label":trans('panorama_57B3C8FB_5DEB_87DC_41BD_0AD7AB8538F6.label'),"hfovMin":"135%","class":"Panorama","thumbnailUrl":"media/panorama_57B3C8FB_5DEB_87DC_41BD_0AD7AB8538F6_t.jpg","partial":false,"data":{"label":"360 - STUDIO BORA - 02"},"overlays":["this.overlay_4ED125C3_5E7F_8E2C_41C5_BCBC90180243","this.overlay_4CB10D8E_5E6D_BE34_41D6_9C743CABF926","this.overlay_4DDA84F0_5E25_8FEC_41B6_0C04599CDA9B","this.overlay_4D97E5B3_5E2B_8E6C_41D7_5CEFBA758447"],"hfovMax":130},{"hfov":360,"vfov":180,"adjacentPanoramas":[{"distance":2.51,"yaw":-38.65,"select":"this.overlay_4C98C5E7_5E7E_89F4_41C1_95065AA5389E.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_4C98C5E7_5E7E_89F4_41C1_95065AA5389E"},"backwardYaw":64.17,"class":"AdjacentPanorama","panorama":"this.panorama_57B3C8FB_5DEB_87DC_41BD_0AD7AB8538F6"}],"pitch":0,"id":"panorama_515C0732_5DEB_8A6C_41D4_5CFD0DF63DF2","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_515C0732_5DEB_8A6C_41D4_5CFD0DF63DF2_t.jpg","cube":{"levels":[{"tags":"ondemand","width":12288,"colCount":24,"url":"media/panorama_515C0732_5DEB_8A6C_41D4_5CFD0DF63DF2_0/{face}/0/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","rowCount":4},{"tags":"ondemand","width":6144,"colCount":12,"url":"media/panorama_515C0732_5DEB_8A6C_41D4_5CFD0DF63DF2_0/{face}/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","rowCount":2},{"tags":["ondemand","preload"],"width":3072,"colCount":6,"url":"media/panorama_515C0732_5DEB_8A6C_41D4_5CFD0DF63DF2_0/{face}/2/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","rowCount":1},{"tags":"mobilevr","width":9216,"colCount":6,"url":"media/panorama_515C0732_5DEB_8A6C_41D4_5CFD0DF63DF2_0/{face}/vr/0.jpg","height":1536,"class":"TiledImageResourceLevel","rowCount":1},{"tags":"mobilevr2gen","width":12288,"colCount":6,"url":"media/panorama_515C0732_5DEB_8A6C_41D4_5CFD0DF63DF2_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"}}],"label":trans('panorama_515C0732_5DEB_8A6C_41D4_5CFD0DF63DF2.label'),"hfovMin":"135%","class":"Panorama","thumbnailUrl":"media/panorama_515C0732_5DEB_8A6C_41D4_5CFD0DF63DF2_t.jpg","partial":false,"data":{"label":"360 - STUDIO BORA - 01"},"overlays":["this.overlay_4C98C5E7_5E7E_89F4_41C1_95065AA5389E","this.overlay_4CA8FE5E_5E66_9AD4_41C6_F465B33AB8EC","this.overlay_4DCC9A16_5E27_7A54_41C8_A5CF159F56DA","this.overlay_4B478123_5E26_866C_41B1_20B58EAD8E33"],"hfovMax":130},{"gyroscopeVerticalDraggingEnabled":true,"zoomEnabled":true,"mouseControlMode":"drag_rotation","aaEnabled":true,"class":"PanoramaPlayer","surfaceSelectionEnabled":false,"displayPlaybackBar":true,"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer_mobile","arrowKeysAction":"translate","id":"MainViewer_mobilePanoramaPlayer"},{"progressBarOpacity":1,"subtitlesTextDecoration":"none","transitionMode":"blending","borderSize":0,"playbackBarHeadShadow":true,"propagateClick":false,"progressBottom":0,"progressHeight":10,"vrPointerSelectionColor":"#FF6600","playbackBarHeadOpacity":1,"subtitlesPaddingTop":5,"width":"100%","paddingLeft":0,"subtitlesShadow":false,"id":"MainViewer_mobile","playbackBarBorderRadius":0,"subtitlesFontFamily":"Arial","toolTipShadowSpread":0,"toolTipPaddingBottom":2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarOpacity":1,"paddingRight":0,"toolTipOpacity":1,"playbackBarBorderColor":"#FFFFFF","playbackBarBottom":5,"toolTipBorderRadius":1,"subtitlesOpacity":1,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","subtitlesTop":0,"progressBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","surfaceReticleOpacity":0.6,"progressBorderSize":0,"surfaceReticleColor":"#FFFFFF","subtitlesVerticalAlign":"bottom","subtitlesHorizontalAlign":"center","playbackBarHeadBorderRadius":0,"playbackBarProgressOpacity":1,"subtitlesEnabled":true,"subtitlesTextShadowColor":"#000000","playbackBarHeadBorderColor":"#000000","playbackBarProgressBackgroundColorDirection":"vertical","subtitlesBorderSize":0,"progressBackgroundColorRatios":[0],"progressBarBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","height":"100%","playbackBarHeadShadowHorizontalLength":0,"playbackBarBorderSize":0,"subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingLeft":3,"subtitlesFontColor":"#FFFFFF","progressOpacity":1,"toolTipShadowHorizontalLength":0,"vrPointerColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColorDirection":"vertical","progressRight":0,"transitionDuration":500,"class":"ViewerArea","playbackBarHeadShadowVerticalLength":0,"surfaceReticleSelectionOpacity":1,"minHeight":25,"playbackBarHeight":10,"progressBarBorderColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","minWidth":50,"toolTipShadowVerticalLength":0,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"subtitlesPaddingBottom":5,"playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"progressBackgroundOpacity":1,"toolTipFontColor":"#606060","borderRadius":0,"subtitlesFontSize":"3vmin","subtitlesPaddingLeft":5,"progressBackgroundColorDirection":"vertical","playbackBarRight":0,"toolTipFontStyle":"normal","paddingTop":0,"vrPointerSelectionTime":2000,"subtitlesBackgroundOpacity":0.2,"toolTipBorderColor":"#767676","displayTooltipInSurfaceSelection":true,"subtitlesFontWeight":"normal","toolTipShadowOpacity":1,"paddingBottom":0,"toolTipTextShadowColor":"#000000","toolTipFontWeight":"normal","toolTipFontFamily":"Arial","subtitlesBottom":50,"toolTipTextShadowBlurRadius":1,"firstTransitionDuration":0,"displayTooltipInTouchScreens":true,"toolTipPaddingRight":3,"subtitlesPaddingRight":5,"toolTipPaddingTop":2,"progressBorderRadius":0,"playbackBarBackgroundOpacity":1,"toolTipTextShadowOpacity":0,"subtitlesTextShadowVerticalLength":1,"toolTipShadowColor":"#333138","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipBorderSize":1,"playbackBarProgressBorderRadius":0,"toolTipDisplayTime":600,"subtitlesBorderColor":"#FFFFFF","toolTipShadowBlurRadius":1,"doubleClickAction":"toggle_fullscreen","progressBorderColor":"#000000","playbackBarHeadShadowOpacity":0.7,"toolTipHorizontalAlign":"center","playbackBarHeadShadowBlurRadius":1.5,"progressBarBackgroundColor":["#3399FF"],"translationTransitionDuration":1000,"subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadHeight":15,"playbackBarLeft":0,"progressLeft":0,"progressBackgroundColor":["#FFFFFF"],"shadow":false,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"toolTipFontSize":"1.11vmin","data":{"name":"Main Viewer"},"subtitlesTextShadowBlurRadius":0},{"borderSize":0,"scaleMode":"fit_inside","backgroundOpacity":0,"propagateClick":false,"data":{"name":"Image2855"},"borderRadius":0,"url":trans('Image_6CE46DE8_63A0_C474_41C7_2595591B957F_mobile.url'),"width":"6.907%","paddingTop":0,"id":"Image_6CE46DE8_63A0_C474_41C7_2595591B957F_mobile","paddingLeft":0,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"center","verticalAlign":"middle","bottom":"6.06%","height":"5.632%","click":"this.openLink(this.translate('LinkBehaviour_6C5A3ED2_63A0_4455_41D5_AE020C5BB899.source'), '_blank')","toolTipHorizontalAlign":"center","class":"Image","minHeight":1,"minWidth":1,"shadow":false,"right":"3.83%"},{"borderSize":0,"scaleMode":"fit_inside","backgroundOpacity":0,"propagateClick":false,"width":"33.681%","borderRadius":0,"url":trans('Image_4A93AA46_5E25_7A34_41B6_C9A0E5B203DC_mobile.url'),"paddingTop":0,"id":"Image_4A93AA46_5E25_7A34_41B6_C9A0E5B203DC_mobile","paddingLeft":0,"paddingBottom":0,"paddingRight":0,"top":"0.12%","horizontalAlign":"center","verticalAlign":"middle","height":"13.906%","toolTipHorizontalAlign":"center","class":"Image","left":"0.94%","minHeight":1,"minWidth":1,"shadow":false,"data":{"name":"Image12514"}},{"data":{"label":"Mulholland - King Canyon"},"autoplay":true,"loop":false,"audio":"this.audiores_4C263972_5E2E_86EC_41CF_E93DACBF9634","class":"MediaAudio","id":"audio_4A19F8C7_5E2D_8634_41D2_F463F702FBBE"},{"hoverFactor":0,"initialSequence":"this.sequence_579B6614_5DEB_8A54_41A4_30963147F758","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera","id":"panorama_57B3C8FB_5DEB_87DC_41BD_0AD7AB8538F6_camera"},{"id":"sequence_57989604_5DEB_8A34_4195_E80695C02796","class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}]},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_4ED6A5C4_5E7F_8E34_41D4_8425DEC461A9"],"data":{"hasPanoramaAction":true,"label":"gif"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_7253088F_63A1_CCCB_41CD_9470A84C2A3F","distance":50,"vertices":[{"yaw":57.05,"class":"PanoramaPoint","pitch":-37.38},{"yaw":63.23,"class":"PanoramaPoint","pitch":-30.24},{"yaw":70.37,"class":"PanoramaPoint","pitch":-32.7},{"yaw":65.4,"class":"PanoramaPoint","pitch":-40.72}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"gif"}}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_4ED125C3_5E7F_8E2C_41C5_BCBC90180243"},{"maps":[],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_7253588F_63A1_CCCB_41C5_D1EC82080BD2","distance":50,"vertices":[{"yaw":63.89,"class":"PanoramaPoint","pitch":-13.42},{"yaw":71.29,"class":"PanoramaPoint","pitch":-14.01},{"yaw":71.21,"class":"PanoramaPoint","pitch":-18.65},{"yaw":63.95,"class":"PanoramaPoint","pitch":-17.76}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"giphy"}}],"data":{"label":"giphy"},"areas":["this.HotspotPanoramaOverlayArea_4CB13D8F_5E6D_BE34_41A7_8A04A19087D2"],"id":"overlay_4CB10D8E_5E6D_BE34_41D6_9C743CABF926"},{"maps":[],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"items":[{"image":"this.res_4B813A7D_5E25_7AD4_41B2_32BAE5870360","distance":50,"vertices":[{"yaw":-65.11,"class":"PanoramaPoint","pitch":7.55},{"yaw":-33.79,"class":"PanoramaPoint","pitch":4.73},{"yaw":-33.73,"class":"PanoramaPoint","pitch":-14.8},{"yaw":-65.29,"class":"PanoramaPoint","pitch":-23.02}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"fundo branco"}}],"data":{"label":"fundo branco"},"areas":["this.HotspotPanoramaOverlayArea_4DD8D4F2_5E25_8FEC_41B0_E3F25458EB44"],"id":"overlay_4DDA84F0_5E25_8FEC_41B6_0C04599CDA9B"},{"maps":[],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"items":[{"image":"this.res_4B811A7D_5E25_7AD4_41D3_185B641FFECE","distance":50,"vertices":[{"yaw":-61.95,"class":"PanoramaPoint","pitch":5.9},{"yaw":-34.66,"class":"PanoramaPoint","pitch":4.17},{"yaw":-35.03,"class":"PanoramaPoint","pitch":-14.22},{"yaw":-62.93,"class":"PanoramaPoint","pitch":-18.7}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"Logo-Vermelho"}}],"data":{"label":"Logo-Vermelho"},"areas":["this.HotspotPanoramaOverlayArea_4D89C5B6_5E2B_8E54_41D2_FDD8B1F5DF9E"],"id":"overlay_4D97E5B3_5E2B_8E6C_41D7_5CEFBA758447"},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_4C9905E8_5E7E_89FC_41CF_1BB6B010FBD2"],"data":{"hasPanoramaAction":true,"label":"gif"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_7254688E_63A1_CCCD_41D6_747CEEBC8926","distance":50,"vertices":[{"yaw":-44.84,"class":"PanoramaPoint","pitch":-35.16},{"yaw":-39.05,"class":"PanoramaPoint","pitch":-28.99},{"yaw":-31.52,"class":"PanoramaPoint","pitch":-32.54},{"yaw":-38.12,"class":"PanoramaPoint","pitch":-40.15}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"gif"}}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_4C98C5E7_5E7E_89F4_41C1_95065AA5389E"},{"maps":[],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_7254B88F_63A1_CCCB_41C8_B833FD109D52","distance":50,"vertices":[{"yaw":161.64,"class":"PanoramaPoint","pitch":-39.14},{"yaw":-171.02,"class":"PanoramaPoint","pitch":-40.23},{"yaw":-170.97,"class":"PanoramaPoint","pitch":-48.76},{"yaw":161.47,"class":"PanoramaPoint","pitch":-47.66}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"giphy"}}],"data":{"label":"giphy"},"areas":["this.HotspotPanoramaOverlayArea_4C97EE60_5E66_9AEC_419F_E2557D72A558"],"id":"overlay_4CA8FE5E_5E66_9AD4_41C6_F465B33AB8EC"},{"maps":[],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"items":[{"image":"this.res_4B813A7D_5E25_7AD4_41B2_32BAE5870360","distance":50,"vertices":[{"yaw":-9.62,"class":"PanoramaPoint","pitch":3.27},{"yaw":12.6,"class":"PanoramaPoint","pitch":3.19},{"yaw":12.7,"class":"PanoramaPoint","pitch":-10.21},{"yaw":-9.75,"class":"PanoramaPoint","pitch":-10.29}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"fundo branco"}}],"data":{"label":"fundo branco"},"areas":["this.HotspotPanoramaOverlayArea_4DCD8A18_5E27_7A5C_41AA_4966BDB0F6AE"],"id":"overlay_4DCC9A16_5E27_7A54_41C8_A5CF159F56DA"},{"maps":[],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"items":[{"image":"this.res_4B811A7D_5E25_7AD4_41D3_185B641FFECE","distance":50,"yaw":1.51,"pitch":-3.69,"class":"HotspotPanoramaOverlayImage","hfov":22.25,"vfov":15.01,"data":{"label":"Logo-Vermelho"},"verticalAlign":"middle","horizontalAlign":"center","scaleMode":"fit_inside"}],"data":{"label":"Logo-Vermelho"},"areas":["this.HotspotPanoramaOverlayArea_4D762249_5E26_8A3C_41D2_1CDBE356A912"],"id":"overlay_4B478123_5E26_866C_41B1_20B58EAD8E33"},{"mp3Url":trans('audiores_4C263972_5E2E_86EC_41CF_E93DACBF9634.mp3Url'),"gain":0.51,"class":"AudioResource","id":"audiores_4C263972_5E2E_86EC_41CF_E93DACBF9634"},{"id":"sequence_579B6614_5DEB_8A54_41A4_30963147F758","class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}]},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_4ED6A5C4_5E7F_8E34_41D4_8425DEC461A9"},{"frameCount":3,"colCount":1,"frameDuration":200,"levels":[{"height":435,"width":256,"class":"ImageResourceLevel","url":"media/res_4E884FD8_5E66_B9DC_41D2_40FB7D6AD3E7_0.png"}],"class":"AnimatedImageResource","rowCount":3,"id":"AnimatedImageResource_7253088F_63A1_CCCB_41CD_9470A84C2A3F"},{"frameCount":79,"colCount":8,"frameDuration":100,"levels":[{"height":4650,"width":3720,"class":"ImageResourceLevel","url":"media/res_4BEA5BBB_5E6F_9A5C_41D7_899B590E8762_0.png"}],"class":"AnimatedImageResource","rowCount":10,"id":"AnimatedImageResource_7253588F_63A1_CCCB_41C5_D1EC82080BD2"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_4CB13D8F_5E6D_BE34_41A7_8A04A19087D2"},{"levels":[{"height":592,"width":974,"class":"ImageResourceLevel","url":"media/res_4B813A7D_5E25_7AD4_41B2_32BAE5870360_0.png"}],"class":"ImageResource","id":"res_4B813A7D_5E25_7AD4_41B2_32BAE5870360"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_4DD8D4F2_5E25_8FEC_41B0_E3F25458EB44"},{"levels":[{"height":516,"width":771,"class":"ImageResourceLevel","url":"media/res_4B811A7D_5E25_7AD4_41D3_185B641FFECE_0.png"}],"class":"ImageResource","id":"res_4B811A7D_5E25_7AD4_41D3_185B641FFECE"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_4D89C5B6_5E2B_8E54_41D2_FDD8B1F5DF9E"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_4C9905E8_5E7E_89FC_41CF_1BB6B010FBD2"},{"frameCount":3,"colCount":1,"frameDuration":200,"levels":[{"height":435,"width":256,"class":"ImageResourceLevel","url":"media/res_4E884FD8_5E66_B9DC_41D2_40FB7D6AD3E7_0.png"}],"class":"AnimatedImageResource","rowCount":3,"id":"AnimatedImageResource_7254688E_63A1_CCCD_41D6_747CEEBC8926"},{"frameCount":79,"colCount":8,"frameDuration":100,"levels":[{"height":4650,"width":3720,"class":"ImageResourceLevel","url":"media/res_4BEA5BBB_5E6F_9A5C_41D7_899B590E8762_0.png"}],"class":"AnimatedImageResource","rowCount":10,"id":"AnimatedImageResource_7254B88F_63A1_CCCB_41C8_B833FD109D52"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_4C97EE60_5E66_9AEC_419F_E2557D72A558"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_4DCD8A18_5E27_7A5C_41AA_4966BDB0F6AE"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_4D762249_5E26_8A3C_41D2_1CDBE356A912"}],"toolTipHorizontalAlign":"center","mediaActivationMode":"window","class":"Player","start":"this.playAudioList([this.audio_4A19F8C7_5E2D_8634_41D2_F463F702FBBE], true); this.init()","minHeight":0,"scrollBarMargin":2,"minWidth":0,"shadow":false,"downloadEnabled":false,"left":432.25,"data":{"defaultLocale":"pt","name":"Player680","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"speechOnInfoWindow":false,"volume":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"pitch":1,"stopBackgroundAudio":false,"rate":1}},"children":["this.MainViewer_mobile","this.Image_4DA314CA_5E1A_8E3C_41C9_544F2A0DC383_mobile","this.Image_4C3A9F12_5E1B_7A2C_41CE_67B04B525DC4_mobile","this.Image_4A93AA46_5E25_7A34_41B6_C9A0E5B203DC_mobile","this.Image_6CE46DE8_63A0_C474_41C7_2595591B957F_mobile"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.31.js.map
})();
//Generated with v2022.1.31, Thu Nov 10 2022